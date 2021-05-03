import "../support/commands";
import * as value from '../testData/inputs';

const enterLocationInput = "[data-cy=enterLocationInput]";
const latInput = "#lat"; 
const lngInput = "#lng";


const branchPage = {
    enterLocationInput,
    latInput, 
    lngInput,
  
    completeBranchPage: () => {
      cy.enterText(enterLocationInput, value.dumfries);
      cy.get('.pac-item', { timeout: 10000 }).should('be.visible');
      cy.enterText(enterLocationInput, '{downarrow}');
      cy.enterText(enterLocationInput, '{enter}');
      cy.get(latInput).should('have.value', value.dumfriesLat);
      cy.get(lngInput).should('have.value', value.dumfriesLong);
    }
  };

export default branchPage;




