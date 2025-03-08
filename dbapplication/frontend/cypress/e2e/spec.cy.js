describe('My First Cypress Test', () => {
  it('Visits the app and checks the title', () => {
    // Replace with the URL of your app (localhost if running locally)
    cy.visit('http://localhost:3000'); 

    // Check if the text 'User Management' appears on the page
    cy.contains('User Management');
  });
});
