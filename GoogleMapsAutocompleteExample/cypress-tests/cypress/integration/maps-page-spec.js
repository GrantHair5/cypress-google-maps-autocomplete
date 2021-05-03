import "../support/commands";
import * as mapsPage from "../pages/maps-page";
import * as value from "../testData/inputs"

describe("Select Branch Page", function () {
    beforeEach(function () {
      cy.visit('/');

      cy.on('window:before:load', (win) => {
        const err = new Error('User denied')
          err.code = GeolocationPositionError.PERMISSION_DENIED
          cy.stub(win.navigator.geolocation, 'getCurrentPosition')
            .callsArgWith(0, err).as('getCurrentPosition')
      })
      
    });

    it('Allows me to complete the Google Maps Autocomplete Search', function() {
      mapsPage.completeBranchPage();
  });
});