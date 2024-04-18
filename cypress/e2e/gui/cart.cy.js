describe('Login', function () {
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    beforeEach(function () {
        cy.visit('https://www.automationexercise.com/login')
    })

    it('Adiciona itens ao carrinho após o login', function () {
        cy.login(email, password)
        cy.addItemsToCart()
    })

    it('Adiciona vários itens ao carrinho após o login', function () {
        cy.login(email, password)
        cy.addMultipleItemsToCart()
    })

    it('Remove item do carrinho após adicionar e fazer login', function () {
        cy.login(email, password)
        cy.addItemsToCart()
        cy.removeItemFromCart()
    })
})