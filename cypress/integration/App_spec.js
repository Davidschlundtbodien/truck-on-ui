describe('Truck On User flows', () => {
  beforeEach(() => {
    cy.interceptGraphQlQuery()
    cy.visit('http://localhost:3000/')
  })

  it('should display a list of trails on the landing page', () => {
    cy.url('http://localhost:3000/')
    cy.get('[href="/trail/1"] > .trail-card > h1')
      .contains('Mosquito Pass')
    cy.get('[href="/trail/11"] > .trail-card > h1')
      .contains('Switzerland Trail')
  })

  it('should search trails when typing in the search bar and clean input when clear search is clicked', () => {
    cy.get('.search-input')
      .type('sch')
    cy.get('.trail-card > h1')
      .contains('Schofield Pass')
    cy.get('.reset-search')
      .click()
    cy.get('[href="/trail/1"] > .trail-card > h1')
      .contains('Mosquito Pass')
    cy.get('[href="/trail/3"] > .trail-card > h1')
      .contains('Schofield Pass')
  })

})
