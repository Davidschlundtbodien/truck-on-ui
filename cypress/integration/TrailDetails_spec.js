describe('Trail details display', () => {
  beforeEach(() => {
    cy.interceptGraphQlQuery()
    cy.visit('http://localhost:3000/')
    cy.get('[href="/trail/2"] > .trail-card > .card-image')
      .click()
  })

  it('should display a single trail with expanded detail', () => {
    cy.url('http://localhost:3000/trail/2')
    cy.get('.trail-name')
      .contains('Black Bear Pass')
    cy.get('.stats-container')
      .contains('Difficulty - Expert')
    cy.get('.stats-container')
      .contains('Total Distance - 8 mi')
    cy.get('.tags-container')
      .contains('Waterfall')
    cy.get('.tags-container')
      .contains('Rocky')
    cy.get('.comments-container')
      .contains('WHERE ARE THE TURTLES?!')
  })

  it('should return the user to the trail index when the home button in clicked in the navbar', () => {
    cy.get('.home-nav-text')
      .click()
      .url('http://localhost:3000/')
  })
})
