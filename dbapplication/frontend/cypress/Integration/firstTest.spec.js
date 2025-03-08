describe('My First Test', () => {
    it('Visits the app and checks the title', () => {
      cy.visit('http://localhost:3000'); // URL of your running app
      cy.contains('User Management'); // Text you're looking for on the page
    });
  });
  