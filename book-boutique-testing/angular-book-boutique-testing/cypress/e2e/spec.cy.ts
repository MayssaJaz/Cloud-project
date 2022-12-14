describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('.navbar-brand').contains('Books Boutique')
    cy.get('.nav-item').contains('Add new book')
    cy.get('.jumbotron > h1').contains('View Books')
  })
})
