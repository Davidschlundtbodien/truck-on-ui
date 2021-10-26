Cypress.Commands.add('interceptGraphQlQuery', () => {
  cy.intercept('POST', "https://truckonapi.herokuapp.com/graphql", (req) => {
    const { operationName } = req.body
    if (operationName === 'user') {
      req.reply({
        fixture: 'userLoginResponse.json',
        headers: {
          'access-control-allow-origin': '*'
        }
      })
    }
    if (operationName === 'trails') {
      req.reply({
        fixture: 'trailsResponse.json',
        headers: {
          'access-control-allow-origin': '*'
        }
      })
    }
    if (operationName === 'trail') {
      req.reply({
        fixture: 'singleTrailResponse.json',
        headers: {
          'access-control-allow-origin': '*'
        }
      })
    }
  })
})
