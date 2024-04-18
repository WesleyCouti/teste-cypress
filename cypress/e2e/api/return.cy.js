describe('Teste na API do Trello', () => {
    it('Obter valores dos campos "name" e "list"', () => {
        cy.request('GET', 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a').then((response) => {
            expect(response.status).to.eq(200)

            const name = response.body.data.list.name
            const list = response.body.data.list

            cy.log('Name:', name)
            cy.log('List:', list)
        })
    })
})