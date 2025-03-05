# FinTrack - Personal Finance Tracker

FinTrack is a web application for managing personal finances, allowing users to create budget categories and track spending within those categories.



## Features

- Create, edit, and delete budget categories
- View transactions associated with each category
- Calculate total spending within a specified date range


## Technology Stack

- Frontend: HTML, CSS, JavaScript (Vanilla)
- Testing: Cypress for end-to-end testing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/fintrack.git
cd fintrack
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Testing

### Performance Testing with JMeter

FinTrack includes performance testing using Apache JMeter to ensure the application can handle the expected load. The performance tests focus on the critical `GET /categories/{id}/transactions` endpoint.

```bash
# Run performance test in non-GUI mode
npm run performance:test

# Open JMeter GUI with the test plan loaded
npm run performance:gui

# Open the latest performance test report
npm run performance:report
```

The JMeter test plan (`performance_testing/plans/performance_test_plan.jmx`) is configured to:

- Simulate 40 concurrent users with a 60-second ramp-up period
- Run for 3 minutes (180 seconds)
- Test the `GET /categories/{id}/transactions` endpoint with date range parameters
- Measure response times, throughput, and error rates
- Assert that response times are under 1 second

Detailed test results and analysis can be found in `performance_testing/performance_test_results.md`.

### Running Cypress Tests

FinTrack uses Cypress for end-to-end testing. To run the tests:

```bash
# Open Cypress Test Runner
npm run cy:open

# Run tests in headless mode
npm run cy:run

# Run tests in specific browsers
npm run cy:run:chrome
npm run cy:run:firefox

# Run tests and generate Mochawesome reports
npm run test:report

# Clean, run tests, merge and generate reports (used in CI)
npm run test:ci
```

### Continuous Integration with GitHub Actions

FinTrack uses GitHub Actions for continuous integration and automated testing. The workflow runs on every push to the main branch and on pull requests.

#### CI/CD Workflow Features

- Runs Cypress tests in both Chrome and Firefox browsers
- Automatically starts the application server before running tests
- Generates and merges Mochawesome reports from all test runs
- Uploads test artifacts (reports, screenshots, videos) for each run
- Publishes combined HTML reports to GitHub Pages
- Can be manually triggered using the GitHub Actions UI

#### Viewing Test Reports

After the GitHub Actions workflow completes:

1. Go to the Actions tab in your GitHub repository
2. Click on the completed workflow run
3. Download the artifacts to view test reports locally, or
4. Visit the GitHub Pages site to view the published reports (for main branch runs)

The reports are organized by run number, allowing you to track test results over time.

#### Manually Triggering the Workflow

To manually run the tests:

1. Go to the Actions tab in your GitHub repository
2. Select the "Cypress Tests" workflow
3. Click "Run workflow"
4. Select the branch to run tests on
5. Click "Run workflow" to start the tests

### Test Reports

FinTrack uses cypress-mochawesome-reporter for generating beautiful HTML test reports with screenshots. After running `npm run test:report`, you can find the reports in the `cypress/reports` directory. The report includes:

- Test suite summary with charts and statistics
- Detailed test results with pass/fail status
- Test duration and performance metrics
- Screenshots captured during test execution
- Screenshots for failed tests
- Test code snippets

Screenshots are automatically taken at key points during test execution:
- When navigating to category details
- Before and after calculating spending
- When creating a new category

### Test Structure

The Cypress tests are organized in the `cypress/e2e` directory:

- `budget-categories.cy.js`: Tests for category management functionality

### Test Coverage

The Cypress tests cover the following functionality:

1. **Category Management**
   - Viewing the list of categories
   - Creating new categories
   - Editing existing categories
   - Deleting categories
   - Validation for required fields
   - Error handling for duplicate names

2. **Spending Calculation**
   - Calculating total spending within a date range
   - Validation for missing date inputs
   - Validation for invalid date ranges
   - Handling zero spending when no transactions exist

### API Mocking

The tests use Cypress's intercept functionality to mock API responses, allowing for consistent and reliable testing without requiring a backend server. Mock implementations can be found in `cypress/support/api-mocks.js`.

Key mock endpoints include:
- GET `/categories` - List all categories
- GET `/categories/:id` - Get a single category
- POST `/categories` - Create a new category
- PUT `/categories/:id` - Update a category
- DELETE `/categories/:id` - Delete a category
- GET `/categories/:id/transactions` - Get transactions for a category
- GET `/categories/:id/spending` - Calculate spending for a category within a date range

## Project Structure

```
fintrack/
├── .github/                          # GitHub configuration
│   └── workflows/                    # GitHub Actions workflows
│       └── cypress-tests.yml         # CI/CD workflow for Cypress tests
├── cypress/
│   ├── e2e/
│   │   └── budget-categories.cy.js   # End-to-end tests
│   ├── fixtures/                     # Test data
│   ├── reports/                      # Generated test reports with screenshots
│   ├── reporter-config.json          # Mochawesome reporter configuration
│   ├── screenshots/                  # Test execution screenshots
│   ├── support/
│   │   ├── api-mocks.js              # API mock implementations
│   │   ├── commands.js               # Custom Cypress commands
│   │   └── e2e.js                    # E2E test configuration
├── jmeter_screenshots/               # JMeter setup screenshots
├── performance_results/              # JMeter test results
├── public/
│   └── index.html                    # Main application HTML
├── server.js                         # Simple development server
├── cypress.config.js                 # Cypress configuration
├── performance_testing/              # Performance testing directory
│   ├── README.md                     # Performance testing documentation
│   ├── performance_test_results.md   # Performance test results and analysis
│   ├── plans/                        # JMeter test plans
│   │   └── performance_test_plan.jmx # JMeter test plan for categories endpoint
│   ├── results/                      # Test results and dashboards
│   └── scripts/                      # Scripts for running tests
│       └── run_performance_test.sh   # Script to run performance tests
├── README.md                         # Project documentation
└── package.json                      # Project dependencies
```

## Best Practices

### Testing Best Practices

1. **Use data-testid attributes**: All important elements have `data-testid` attributes for reliable test selectors.
2. **Mock API responses**: Tests use Cypress intercept to mock API responses, making tests reliable and fast.
3. **Test error states**: Tests cover both happy paths and error scenarios.
4. **Isolation**: Each test is isolated and doesn't depend on the state from previous tests.
5. **Readability**: Tests are organized in descriptive blocks using `describe` and `it` to clearly communicate intent.

### Development Best Practices

1. **Separation of concerns**: UI components, API calls, and event handlers are logically separated.
2. **Error handling**: Proper error handling and user feedback for all operations.
3. **Responsive design**: The application is designed to work on various screen sizes.
4. **Accessibility**: The application uses semantic HTML and provides appropriate ARIA attributes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
