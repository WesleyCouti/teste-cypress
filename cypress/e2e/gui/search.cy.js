import faker from 'faker'
describe('Login', function () {
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    beforeEach(function () {
        cy.visit('https://www.automationexercise.com/login')
    })

    it('Busca por um item após o login', function () {
        cy.login(email, password)
        cy.get('.shop-menu > .nav > :nth-child(2) > a')
            .should('be.visible')
            .click()
        cy.get('#search_product')
            .type('Top')
        cy.get('#submit_search')
            .click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p')
            .should('be.visible')
            .and('contain', 'Blue Top')
    })
})