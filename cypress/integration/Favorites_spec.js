describe('Favorites display and userflow', () => {
  beforeEach(() => {
    cy.interceptGraphQlQuery()
    cy.visit('http://localhost:3000/')
    cy.get('.favorite-nav-text')
      .click()
  })

  it('should display a trails favorited by the logged in user', () => {
    cy.get('.favorite-trails-list > :nth-child(1)')
      .contains('Engineer Pass')
    cy.get('.favorite-trails-list > :nth-child(2)')
      .contains('Pearl Pass')
    cy.get('.favorite-trails-list > :nth-child(5)')
      .contains('Hessie Townsite')
  })

  it('should have trails linked to trail details when clicked', () => {
    cy.get('.favorite-trails-list > :nth-child(1)')
      .click()
      .url('http://localhost:3000/trail/14')
    cy.get('.trail-name')
      .contains('Black Bear Pass')
  })

})
