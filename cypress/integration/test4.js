describe("test", () => {
  it("s", () => {
    cy.visit("https://docs.cypress.io/api/commands/scrollintoview#Syntax");
    cy.get("#Requirements").scrollIntoView({ easing: 'linear' });
      cy.get('.-mx-5').scrollIntoView()
  });
});
