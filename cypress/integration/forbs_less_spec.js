describe("Forbes views test", () => {
  it("should check if the views are visible if they are lower than a certain view count", () => {
    cy.intercept(
      "GET",
      "https://www.forbes.com/tamagotchi/v1/fetchLifetimeViews/?id=blogAndPostId/blog/post/4187-5d93637f689cb60006eac5d8",
      { views: 400 }
    ).as("res");
    cy.visit(
      "https://www.forbes.com/sites/wadeshepard/2019/10/03/what-china-is-really-up-to-in-africa/"
    );
    // console.log("we are here");
    // cy.get(".pageviews").should("be.visible");
    // if (cy.get("@res").its("response.body.views").should("be.lte", 500)) {
    //   // console.log("we are here");
    //   cy.get(".pageviews").should("be.visible");
    // }
    cy.get(".pageviews").then(($views_n) => {
      let views;
      views = $views_n.text();
      views = views.replace(/,/g, "");
      views = parseInt(views);
      cy.wait("@res").its("response.body.views").should("eq", views);
      cy.wrap($views_n).should("be.visible");
    });
    // cy.get("@res").its("response.body.views").should("be.lte", 500);
    // cy.get(".pageviews").should("be.visible");
    // // // continue doing stuff
    cy.log("Reached Here");
    // cy.get(".pageviews").should("be.visible");
  });
});
