// Import the api-mocks for more complex mocking scenarios
import { mockCategoryEndpoints } from '../support/api-mocks';

describe('Budget Categories Management', () => {
  beforeEach(() => {
    // Set up API mocks before visiting the page
    cy.mockCategoryAPI();
    // Visit the page
    cy.visit('/');
    // Wait for the categories to load with a longer timeout
    cy.wait('@getCategories', { timeout: 10000 });
  });

  describe('Category List View', () => {
    it('displays all categories', () => {
      // Verify initial list
      cy.get('[data-testid="category-list"]').should('be.visible');
      cy.get('[data-testid="category-item"]').should('have.length.at.least', 1);
    });
  });

  describe('Category Creation', () => {
    it('successfully creates a new category', () => {
      const newCategory = {
        name: 'New Test Category',
        description: 'Test Description'
      };

      cy.get('[data-testid="add-category-button"]').click();
      cy.get('[data-testid="category-name-input"]').type(newCategory.name);
      cy.get('[data-testid="category-description-input"]').type(newCategory.description);
      cy.get('[data-testid="save-category-button"]').click();

      cy.wait('@createCategory').then(interception => {
        expect(interception.response.statusCode).to.eq(201);
      });
      cy.get('[data-testid="success-message"]').should('be.visible');
      cy.get('[data-testid="success-message"]').should('contain', 'created successfully');
    });

    it('shows validation error for empty name', () => {
      cy.get('[data-testid="add-category-button"]').click();
      
      // Force the form submission to bypass HTML5 validation
      cy.get('form').invoke('attr', 'novalidate', 'novalidate');
      cy.get('[data-testid="save-category-button"]').click();
      
      // Check for client-side validation message
      cy.get('[data-testid="error-message"]').should('contain', 'Name is required');
    });

    it('prevents duplicate category names', () => {
      // First make sure we have a category with name 'Groceries'
      cy.get('[data-testid="category-item"]').should('contain', 'Groceries');
      
      // Intercept specifically for this test case
      cy.intercept('POST', '/categories', {
        statusCode: 409,
        body: { error: 'Category with this name already exists' }
      }).as('createDuplicateCategory');
      
      // Try to create a duplicate
      cy.get('[data-testid="add-category-button"]').click();
      cy.get('[data-testid="category-name-input"]').type('Groceries');
      cy.get('[data-testid="category-description-input"]').type('Duplicate name test');
      cy.get('[data-testid="save-category-button"]').click();

      cy.wait('@createDuplicateCategory').then(interception => {
        expect(interception.response.statusCode).to.eq(409);
      });
      cy.get('[data-testid="error-message"]').should('contain', 'already exists');
    });
  });

  describe('Category Details and Edit', () => {
    it('displays category details when clicked', () => {
      // First find the category name to verify later
      let categoryName;
      cy.get('[data-testid="category-item"]').first().within(() => {
        cy.get('.category-name').invoke('text').then(text => {
          categoryName = text;
        });
      });

      // Click on the category
      cy.get('[data-testid="category-item"]').first().within(() => {
        cy.get('.category-info').click();
      });
      
      cy.wait('@getCategory');

      // Verify details are shown
      cy.get('[data-testid="category-details"]').should('be.visible');
      
      // Verify the name matches
      cy.get('[data-testid="category-name"]').should('be.visible').then($el => {
        expect($el.text()).to.include(categoryName);
      });
      
      // Check transactions section
      cy.get('[data-testid="transactions-list"]').should('be.visible');
      cy.wait('@getCategoryTransactions');
    });

    it('successfully edits a category', () => {
      const updatedName = 'Updated Category Name';
      const updatedDesc = 'Updated Description';

      cy.get('[data-testid="category-item"]').first().within(() => {
        cy.get('[data-testid="edit-button"]').click();
      });

      cy.get('[data-testid="category-name-input"]').clear().type(updatedName);
      cy.get('[data-testid="category-description-input"]').clear().type(updatedDesc);
      cy.get('[data-testid="save-category-button"]').click();

      cy.wait('@updateCategory').its('response.statusCode').should('eq', 200);
      cy.get('[data-testid="success-message"]').should('contain', 'Category updated successfully');
    });
  });

  describe('Category Deletion', () => {
    it('successfully deletes a category', () => {
      // Find a category that's not Entertainment (which has transactions)
      cy.contains('[data-testid="category-item"]', 'Groceries').within(() => {
        cy.get('[data-testid="delete-button"]').click();
      });

      cy.get('[data-testid="confirm-delete-modal"]').should('be.visible');
      cy.get('[data-testid="confirm-delete-button"]').click();

      cy.wait('@deleteCategory').its('response.statusCode').should('eq', 204);
      cy.get('[data-testid="success-message"]').should('be.visible');
      cy.get('[data-testid="success-message"]').should('contain', 'deleted successfully');
    });

    it('shows error when deleting category with transactions', () => {
      // Entertainment category has transactions in our mock
      // Intercept specifically for this test case
      cy.intercept('DELETE', '/categories/*', {
        statusCode: 409,
        body: { error: 'Cannot delete category with existing transactions' }
      }).as('deleteWithTransactions');
      
      cy.contains('[data-testid="category-item"]', 'Entertainment').within(() => {
        cy.get('[data-testid="delete-button"]').click();
      });

      cy.get('[data-testid="confirm-delete-modal"]').should('be.visible');
      cy.get('[data-testid="confirm-delete-button"]').click();

      cy.wait('@deleteWithTransactions').its('response.statusCode').should('eq', 409);
      cy.get('[data-testid="error-message"]').should('be.visible');
      cy.get('[data-testid="error-message"]').should('contain', 'Cannot delete');
    });



    it('cancels deletion when user clicks cancel', () => {
      cy.get('[data-testid="category-item"]').first().within(() => {
        cy.get('[data-testid="delete-button"]').click();
      });

      cy.get('[data-testid="confirm-delete-modal"]').should('be.visible');
      cy.get('[data-testid="cancel-delete-button"]').click();

      // Verify modal is closed (hidden) and has the closed attribute
      cy.get('[data-testid="confirm-delete-modal"]')
        .should('have.css', 'display', 'none')
        .and('have.attr', 'data-modal-closed', 'true');
      
      // Verify category still exists
      cy.get('[data-testid="category-item"]').first().should('exist');
    });
  });


  describe('Category Spending Calculation', () => {
    beforeEach(() => {
      // Use the existing Calculate Total Spending button
      cy.window().then(win => {
        // Find the existing button
        const existingButton = win.document.querySelector('[data-testid="calculate-spending"]');
        
        // Make sure it's visible
        if (existingButton) {
          existingButton.style.display = 'inline-block';
          
          // Add a data-testid attribute for the tests
          existingButton.setAttribute('data-testid', 'calculate-spending-button');
        }
      });
    });

    it('calculates total spending for a category within a date range', () => {
      // Navigate to category details using custom command
      cy.navigateToCategoryDetails(0);

      // Use the custom command to set date range and calculate spending
      cy.calculateSpending('2025-01-01', '2025-03-31');

      // Wait for the API call to complete
      cy.wait('@calculateCategorySpending');

      // Verify the spending summary is displayed
      cy.get('[data-testid="spending-summary"]').should('be.visible');
      cy.get('[data-testid="total-spending"]').should('contain', '$240.75');
      cy.get('[data-testid="transaction-count"]').should('contain', '3');
    });

    it('shows error for missing date range when calculating spending', () => {
      // Navigate to category details using custom command
      cy.navigateToCategoryDetails(0);

      // Use the custom command with empty dates
      cy.calculateSpending('', '');

      // Check for client-side validation message
      cy.get('[data-testid="error-message"]').should('be.visible');
      cy.get('[data-testid="error-message"]').should('contain', 'Please enter both start and end dates');
    });

    it('shows error for invalid date range when calculating spending', () => {
      // Navigate to category details using custom command
      cy.navigateToCategoryDetails(0);

      // Use the custom command with invalid date range
      cy.calculateSpending('2025-12-31', '2025-01-01');

      // Check for client-side validation message
      cy.get('[data-testid="error-message"]').should('be.visible');
      cy.get('[data-testid="error-message"]').should('contain', 'End date must be after start date');
    });

    it('displays zero spending when no transactions exist in the date range', () => {
      // Navigate to category details using custom command
      cy.navigateToCategoryDetails(0);

      // Use the custom command with date range that has no transactions
      cy.calculateSpending('2024-01-01', '2024-01-31');

      // Wait for the API call to complete
      cy.wait('@emptySpendingCalculation');

      // Verify the spending summary shows zero
      cy.get('[data-testid="spending-summary"]').should('be.visible');
      cy.get('[data-testid="total-spending"]').should('contain', '$0.00');
      cy.get('[data-testid="transaction-count"]').should('contain', '0');
    });
  });
});
