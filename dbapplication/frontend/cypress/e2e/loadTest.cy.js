describe('Load Test: Simulating Multiple Users', () => {
    it('Simulates multiple user requests', () => {
      // The URL of your app (use the appropriate one for your app)
      const appUrl = 'http://localhost:3000';
  
      // Simulate load by sending multiple requests (example: 100 requests)
      for (let i = 0; i < 100; i++) {
        cy.request(appUrl).then((response) => {
          expect(response.status).to.eq(200); // Check for successful response
        });
      }
    });
  });
  