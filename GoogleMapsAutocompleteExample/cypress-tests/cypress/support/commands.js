Cypress.Commands.add('enterText', (elementSelector, text) => {
    cy.get(elementSelector).type(text);
});
 
Cypress.Commands.add('clickElement', (elementSelector) => {
    cy.get(elementSelector).click();
});

Cypress.Commands.add('isVisible', (elementSelector) => {
    cy.get(elementSelector).should('be.visible');
});
 
Cypress.Commands.add('isNotVisible', (elementSelector) => {
    cy.get(elementSelector).should('not.be.visible');
});
 
Cypress.Commands.add('assertElementContainsText', (elementSelector, elementValue) => {
    cy.get(elementSelector).should('have.value', elementValue);
});
 
Cypress.Commands.add('assertNumberOfElements', (elementSelector, childSelector, numberOfElementsExpected) => {
    cy.get(elementSelector).find(childSelector).should('have.length', numberOfElementsExpected);
});
 
Cypress.Commands.add('assertValuesAreEqual', (firstValue, secondValue) => {
    expect(firstValue).to.equal(secondValue);
});
 
Cypress.Commands.add('selectRadioButton', (elementSelector) => {
    cy.get(elementSelector).check({force: true});
});

Cypress.Commands.add('assertUrlContainsText', urlString => {
    cy.url().should('contain', urlString);
});

Cypress.Commands.add('assertElementIsDisabled', elementSelector => {
    cy.get(elementSelector).should('be.disabled');
  });

  Cypress.Commands.add('exists', elementSelector => {
    cy.get(elementSelector).should('exist');
  });

  Cypress.Commands.add('doesNotExist', elementSelector => {
    cy.get(elementSelector).should('not.exist');
  });

  Cypress.Commands.add('setAttributeValue', (elementSelector, text) => {
    cy.get(elementSelector).invoke('attr', 'value', text);
  });
  
  