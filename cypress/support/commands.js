Cypress.Commands.add('interceptGraphQlQuery', () => {
  cy.intercept('POST', "https://truckonapi.herokuapp.com/graphql", (req) => {
    const { operationName } = req.body
    if (operationName === 'trails') {
      fixture: 'trailsResponse.json'
    }
    if (operationName === 'trail') {
      fixture: 'SingleTrailResponse.json'
    }
  })
})
