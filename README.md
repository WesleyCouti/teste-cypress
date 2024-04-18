# Projeto de Automação de Testes com Cypress

Este projeto utiliza o Cypress para automatizar testes de interface de usuário em um site de exemplo. 

## Instalação

1. Clone o repositório: `git clone https://github.com/WesleyCouti/teste-cypress.git`
2. Instale as dependências: `npm install`

## Configuração das Variáveis de Ambiente

Crie um arquivo `cypress.env.json` na raiz do projeto com as seguintes variáveis:

```json
{
"email": "seu-email@example.com",
"password": "sua-senha"
}
```

##	Estrutura do Projeto

* cypress/integration: Contém os arquivos de teste Cypress.
* cypress/support/commands.js: Contém os comandos personalizados utilizados nos testes.
* cypress/support/e2e.js: Contém a importação dos comandos personalizados e outros plugins Cypress.

##	Testes Realizados

* login.cy.js: Realiza o login no site e verifica se o usuário está logado corretamente.
* search.cy.js: Realiza uma busca por um item específico no site e verifica se o item é exibido nos resultados.
* cart.cy.js: Adiciona um item ao carrinho, remove o item do carrinho e verifica se o carrinho está vazio após a remoção.
* checkout.cy.js: Realiza o checkout de um item no carrinho, preenchendo informações de pagamento e finalizando a compra.

##	Executando os Testes
Para executar os testes, utilize o comando npm run cypress:open e selecione o arquivo de teste desejado na interface do Cypress.
