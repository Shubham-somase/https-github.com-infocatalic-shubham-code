

describe('csslocator',()=>  {
    it("csslocator",()=>{
    
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
        cy.get(".input").type("text");
       
        cy.get(".button").click();

      })
    })

