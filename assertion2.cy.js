

<reference types="cypress"/>;
<reference types="cypress-xpath"/>;
import { describe, it } from "mocha";

describe("explicit assertion", () => {
 
  it("explicit demo", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('input[placeholder="Username"]').type("admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get('button[type="submit"]').click()

    let exptname="Praveen Kumar"
    cy.get(".oxd-userdropdown-name").then((x)=>{

        let acname=x.text()
         //bdd style
        expect(acname).to.equal(exptname)
        expect(acname).to.not.equal(exptname)

        //tdd style
        assert.equal(acname,exptname )
        assert.notEqual(acname,exptname)
    });
    
  });

});
