Cypress.Commands.add('enterText', (elementSelector, text) => {
    cy.get(elementSelector).type(text);
});
 
  