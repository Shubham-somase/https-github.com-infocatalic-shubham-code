/// <reference types="cypress" />



describe("button",()=> {
    it("reactwithbutton",()=>{

        cy.visit("https://www.techlistic.com/p/selenium-practice-form.html")
        cy.get("input#sex-1").should('be.visible')
    })
})