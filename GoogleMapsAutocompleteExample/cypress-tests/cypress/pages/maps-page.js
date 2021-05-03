import "../support/commands";
import * as value from '../testData/inputs';

const enterLocationInput = "[data-cy=enterLocationInput]";
const latInput = "[data-cy=lat]"; 
const lngInput = "[data-cy=lng]";


const branchPage = {
    enterLocationInput,
    latInput, 
    lngInput,
  
    completeBranchPage: () => {
      cy.enterText(enterLocationInput, value.dumfries);
      cy.get('.pac-item', { timeout: 10000 }).should('be.visible');
      cy.enterText(enterLocationInput, '{downarrow}');
      cy.enterText(enterLocationInput, '{enter}');
      cy.get('[data-cy=lat]', { timeout: 10000 }).should('be.visible').assertElementContainsText(value.dumfriesLat);
      cy.get('[data-cy=lng]', { timeout: 10000 }).should('be.visible').assertElementContainsText(value.dumfriesLong);
    }
  };

export default branchPage;




