describe('Error handling', () => {
  beforeEach(() => {
    cy.interceptGraphQlQuery()
    cy.visit('http://localhost:3000/incorrect')
  })

  it('should display a 404 page not found component for bad URL', () => {
    cy.get('section')
  })

  it('should have a 404 page that directs the user back to the index', () =>{
    cy.get('.error-explore-link')
      .click()
    cy.get('.trail-card-container >:nth-child(1)')
      .contains('Mosquito Pass')
  })
})
