///  <reference types="Cypress" />

describe('My Second Test Suite', function()
{

it('My SecondTest case', function() {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('[value="radio2"]').check().should('be.checked')

    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    cy.get('select').select('option2').should('have.value','option2')

    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item div').each(($el,index,$list) =>{
    if($el.text()=="India")
    {
        cy.wrap($el).click()
    }
    })

    cy.get('#autocomplete').should('have.value','India')

    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()

    cy.on('window:alert',(str)=>
    {
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm',(str)=>
    {
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })




})
}  )