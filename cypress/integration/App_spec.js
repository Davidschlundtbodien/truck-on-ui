describe('Truck On User flows', () => {

  it('should have url localhost:3000', () => {
    cy.visit('http://localhost:3000/')
    cy.url('http://localhost:3000/')
  })
})