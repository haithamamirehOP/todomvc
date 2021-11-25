describe('Task: Working Links', () => {
  it('should check if all language links are accessible', () => {
    cy.visit('https://www.wikipedia.org/');
    // const langs = ['en', 'es', 'ru', 'zh', 'pt', 'de', 'fr', 'it', 'pl', 'ja'];
    // langs.forEach((lang) => {
    //   cy.request(`${lang}.wikipedia.org`).then((response) => {
    //     expect(response.status).to.eq(200);
    //   });
    // });
    cy.get('.central-featured-lang>a').each(($link) => {
      cy.wrap($link)
        .should('have.attr', 'href')
        .then(($href) => {
          cy.request('https:' + $href).then(($response) => {
            expect($response.status).to.eq(200);
          });
        });
    });
  });
});

// })
// cy.get('#js-link-box-en').click();
// cy.go('back');

// cy.get('#js-link-box-es').click();
// cy.go('back');

// cy.get('#js-link-box-ru').click();
// cy.go('back');

// cy.get('#js-link-box-zh').click();
// cy.go('back');

// cy.get('#js-link-box-pt').click();
// cy.go('back');

// cy.get('#js-link-box-ja').click();
// cy.go('back');

// cy.get('#js-link-box-de').click();
// cy.go('back');

// cy.get('#js-link-box-fr').click();
// cy.go('back');

// cy.get('#js-link-box-it').click();
// cy.go('back');

// cy.get('#js-link-box-pl').click();
// cy.go('back');
// const langs = [
//   'English',
//   '日本語',
//   'Deutsch',
//   'Français',
//   'Italiano',
//   'Polski',
//   'Português',
//   '中文',
//   'Русский',
//   'Español',
// ];

// langs.forEach((lang) => {
//   cy.contains(lang).click();
//   cy.go('back');
// });
