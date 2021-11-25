describe("Superhero", () => {
  it("should return one entity with modified data", () => {
    cy.intercept(
      "GET",
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
      { fixture: "superhero.json" }
    ).as("res");
    cy.visit(
      "https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished"
    );
    cy.wait("@res").its("response.statusCode").should("eq", 200);
    // cy.wait("@res").its("response.body.formed").should("eq", 2012);
  });
});
