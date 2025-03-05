// Import commands.js using ES2015 syntax:
import './commands'

// Import cypress-mochawesome-reporter styles
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests from command log
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}

// Prevent Cypress from failing tests when it encounters uncaught exceptions in the application
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
