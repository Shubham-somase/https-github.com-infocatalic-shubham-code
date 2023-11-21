// const { describe } = require("mocha");

// describe( "implicit assertion",()=> {
//     it("implicit demo", ()=>{

//         cy.visit("https://www.orangehrm.com/");
//       cy.url().should('include','orangehrm.com');
//       cy.url().should('eq',"https://www.orangehrm.com/");
//       cy.url().should('contain','orangehrm');
     
//       cy.url().should('include','orangehrm.com');
//       .should('eq',"https://www.orangehrm.com/");
//       .should('contain','orangehrm');

//       cy.url().should('include','orangehrm.com');
//       .and('eq',"https://www.orangehrm.com/");
//       .and('contain','orangehrm');
    
// });
// });

const { describe, it } = require("mocha");

describe("implicit assertion", () => {
  it("implicit demo", () => {
    cy.visit("https://www.orangehrm.com/");
    cy.url().should('include', 'orangehrm.com');
    cy.url().should('eq', "https://www.orangehrm.com/");
    cy.url().should('contain', 'orangehrm');

    cy.url().should('include', 'orangehrm.com')
      .should('eq', "https://www.orangehrm.com/")
      .should('contain', 'orangehrm');

    cy.url().should('include', 'orangehrm.com')
      .and('eq', "https://www.orangehrm.com/")
      .and('contain', 'orangehrm');

      cy.title().should('include','Onrange')
      .and('eq','Orange')
      .and('contain','HRM')
  });
});
