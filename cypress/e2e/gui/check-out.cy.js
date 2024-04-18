import faker from 'faker'

describe('Login', function () {
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    beforeEach(function () {
        cy.visit('https://www.automationexercise.com/login')
    })

    it('Realiza o checkout do item adicionado ao carrinho após o login', function () {
        cy.login(email, password)
        cy.checkoutItem()
        cy.addCardDetails()
        cy.finalizePurchase()
    })
})
