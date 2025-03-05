// Custom command to create a new category
Cypress.Commands.add('createCategory', (name, description) => {
  cy.get('[data-testid="add-category-button"]').click();
  if (name) {
    cy.get('[data-testid="category-name-input"]').type(name);
  }
  if (description) {
    cy.get('[data-testid="category-description-input"]').type(description);
  }
  // Take a screenshot before saving
  cy.screenshot(`create-category-${name}`);
  cy.get('[data-testid="save-category-button"]').click();
});

// Custom command to edit a category
Cypress.Commands.add('editCategory', (categoryId, newName, newDescription) => {
  cy.get(`[data-testid="edit-category-${categoryId}"]`).click();
  if (newName) {
    cy.get('[data-testid="category-name-input"]').clear().type(newName);
  }
  if (newDescription) {
    cy.get('[data-testid="category-description-input"]').clear().type(newDescription);
  }
  cy.get('[data-testid="save-category-button"]').click();
});

// Custom command to navigate to category details
Cypress.Commands.add('navigateToCategoryDetails', (index = 0) => {
  // Click on the category at the specified index (default is first)
  cy.get('[data-testid="category-item"]').eq(index).within(() => {
    cy.get('.category-info').click();
  });
  cy.wait('@getCategory');
  // Skip screenshots in headless mode to avoid timeouts
  if (Cypress.browser.isHeadless !== true) {
    cy.screenshot(`category-details-${index}`);
  }
});

// Custom command to calculate spending for a category within a date range
Cypress.Commands.add('calculateSpending', (startDate, endDate) => {
  // Set date range for spending calculation
  if (startDate) {
    cy.get('[data-testid="start-date"]').clear().type(startDate);
  }
  if (endDate) {
    cy.get('[data-testid="end-date"]').clear().type(endDate);
  }
  
  // Skip screenshots in headless mode to avoid timeouts
  if (Cypress.browser.isHeadless !== true) {
    // Take a screenshot before clicking the button
    cy.screenshot(`spending-calculation-input-${startDate}-to-${endDate}`);
  }
  
  // Click the calculate spending button
  cy.get('[data-testid="calculate-spending-button"]').click();
  
  // Skip screenshots in headless mode to avoid timeouts
  if (Cypress.browser.isHeadless !== true) {
    // Take a screenshot after clicking the button
    cy.screenshot(`spending-calculation-result-${startDate}-to-${endDate}`);
  }
});

// Custom command to delete a category
Cypress.Commands.add('deleteCategory', (categoryId, confirm = true) => {
  cy.get(`[data-testid="delete-category-${categoryId}"]`).click();
  if (confirm) {
    cy.get('[data-testid="confirm-delete-button"]').click();
  } else {
    cy.get('[data-testid="cancel-delete-button"]').click();
  }
});

// Custom command to verify category details
Cypress.Commands.add('verifyCategoryDetails', (category) => {
  cy.get('[data-testid="category-details"]').within(() => {
    cy.get('[data-testid="category-name"]').should('contain', category.name);
    cy.get('[data-testid="category-description"]').should('contain', category.description);
  });
});

// Custom command to mock API responses
Cypress.Commands.add('mockCategoryAPI', () => {
  // Mock categories list
  cy.intercept('GET', '/categories', {
    statusCode: 200,
    fixture: 'categories.json'
  }).as('getCategories');

  // Mock single category
  cy.intercept('GET', '/categories/*', {
    statusCode: 200,
    fixture: 'category.json'
  }).as('getCategory');

  // Mock create category
  cy.intercept('POST', '/categories', {
    statusCode: 201,
    fixture: 'newCategory.json'
  }).as('createCategory');

  // Mock update category
  cy.intercept('PUT', '/categories/*', {
    statusCode: 200,
    fixture: 'updatedCategory.json'
  }).as('updateCategory');

  // Mock delete category
  cy.intercept('DELETE', '/categories/*', {
    statusCode: 204
  }).as('deleteCategory');
  
  // Mock category transactions
  cy.intercept('GET', '/categories/*/transactions*', {
    statusCode: 200,
    fixture: 'transactions.json'
  }).as('getCategoryTransactions');
  
  // Mock category spending calculation
  cy.intercept('GET', '/categories/*/spending?startDate=2025-01-01&endDate=2025-03-31', {
    statusCode: 200,
    fixture: 'spending.json'
  }).as('calculateCategorySpending');
  
  // Mock empty spending calculation
  cy.intercept('GET', '/categories/*/spending?startDate=2024-01-01&endDate=2024-01-31', {
    statusCode: 200,
    fixture: 'emptySpending.json'
  }).as('emptySpendingCalculation');
});
