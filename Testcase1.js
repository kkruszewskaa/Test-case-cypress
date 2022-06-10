///  <reference types="Cypress" />

describe('My First Test Suite', function()
{

it('My FirstTest case', function() {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(1000)
cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').each(($el, index, $list) => {

const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
cy.wrap($el).find('button').click()
}
})
cy.wait(1000)
cy.get('.search-keyword').clear()
cy.wait(1000)
cy.get('.search-keyword').type('ma')
cy.wait(1000)
cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').each(($el, index, $list) => {

const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Tomato'))
{
cy.wrap($el).find('button').click()
}
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()
cy.get('select').select('Benin')
cy.get('.chkAgree').check().should('be.checked')
cy.get('button').click()


})
}  )