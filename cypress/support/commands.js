import faker from 'faker'

Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://www.automationexercise.com/login')
  cy.get('[data-qa="login-email"]')
    .type(email)
  cy.get('[data-qa="login-password"]')
    .type(password)
  cy.get('[data-qa="login-button"]')
    .click()
  cy.get(':nth-child(10) > a')
    .should('be.visible')
    .and('contain', 'Logged in as teste plard')
})

Cypress.Commands.add('addItemsToCart', () => {
  cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
    .should('be.visible')
    .click()

  cy.get('u')
    .should('be.visible')
    .click()

  cy.get('#product-1')
    .should('be.visible')
})

Cypress.Commands.add('removeItemFromCart', () => {
  cy.get('.cart_quantity_delete > .fa')
    .click()
  cy.get('#empty_cart > .text-center > a > u')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('loginWithIncorrectCredentials', () => {
  const email = faker.internet.email()
  const password = faker.internet.password()

  cy.get('[data-qa="login-email"]')
    .type(email)
  cy.get('[data-qa="login-password"]')
    .type(password)
  cy.get('[data-qa="login-button"]')
    .click()
  cy.get('.login-form > form > p')
    .should('be.visible')
    .and('contain', 'Your email or password is incorrect!')
})

Cypress.Commands.add('logout', () => {
  cy.get('.shop-menu > .nav > :nth-child(4) > a')
    .should('be.visible')
    .and('contain', 'Logout')
    .click()
  cy.get('.login-form > h2')
    .should('be.visible')
    .and('contain', 'Login to your account')
})

Cypress.Commands.add('addMultipleItemsToCart', () => {
  cy.get('.shop-menu > .nav > :nth-child(2) > a')
    .should('be.visible')
    .click()
  cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
    .should('be.visible')
    .click()
  cy.get('#quantity')
    .clear()
    .type('3')
  cy.get(':nth-child(5) > .btn')
    .should('be.visible')
    .click()
  cy.get('u')
    .should('be.visible')
    .click()
  cy.removeItemFromCart()
})

Cypress.Commands.add('checkoutItem', () => {
  const texto = faker.lorem.words(6)

  cy.addItemsToCart()
  cy.get('.col-sm-6 > .btn')
    .should('be.visible')
    .click()

  cy.get('.form-control')
    .clear()
    .type(texto)
  cy.get(':nth-child(7) > .btn')
    .should('be.visible')
    .click()
  cy.get('[data-qa="pay-button"]')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('addCardDetails', () => {
  cy.get('[data-qa="name-on-card"]')
    .type('Teste Cartao')
  cy.get('[data-qa="card-number"]')
    .type('5505733810683354')
  cy.get('[data-qa="cvc"]')
    .type('308')
  cy.get('[data-qa="expiry-month"]')
    .type('09')
  cy.get('[data-qa="expiry-year"]')
    .type('2025')
  cy.get('[data-qa="pay-button"]')
    .click()
})

Cypress.Commands.add('finalizePurchase', () => {
  cy.get('[data-qa="order-placed"] > b')
    .should('have.text', 'Order Placed!')
  cy.get('.col-sm-9 > p')
    .should('have.text', 'Congratulations! Your order has been confirmed!')
  cy.get('[data-qa="continue-button"]')
    .click()
})