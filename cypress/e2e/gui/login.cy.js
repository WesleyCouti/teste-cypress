import faker from 'faker'
describe('Login', function () {
  const email = Cypress.env('email')
  const password = Cypress.env('password')

  beforeEach(function () {
    cy.visit('https://www.automationexercise.com/login')
  })

  it('verifica o acesso à página de login', function () {
    cy.login(email, password)
  })

  it('Valida a exibição da mensagem de erro ao inserir email ou senha incorretos', function () {
    cy.loginWithIncorrectCredentials()
  })

  it('Valida o logout do sistema', function () {
    cy.login(email, password)
    cy.logout()
  })
})
