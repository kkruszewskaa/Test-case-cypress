///  <reference types="Cypress" />

describe('My Third Test Suite', function()
{

it('My ThirdTest case', function() {

    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.get(':nth-child(1) > .form-control').type('Klaudia')
    cy.get('input[name="email"]').type('Klaudia@gmail.com')
    cy.get('#exampleInputPassword1').type('Password123')
    cy.get('#exampleCheck1').check().should('be.checked')
    cy.get('#exampleFormControlSelect1').select('Female')
    cy.get('#inlineRadio1').check().should('be.checked')
    cy.get('input[name="bday"]').type('1998-05-13')
    cy.get('.btn').click()

})
})