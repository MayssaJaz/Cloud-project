
describe('Testing add form page', () => {
    it('should visit add form and add books', () => {
        cy.visit('/');
        cy.fixture('example.json').then((books) => {
            books.forEach(book => {
                cy.log(book)
                cy.get('.nav-item').click();
                cy.get('#submit-button').should('be.disabled')
                cy.get('#book').type(book.name);
                cy.get('#author').type(book.author);
                cy.get('#genre').select(book.genre);
                cy.get('#pages').type(book.pages);
                cy.get('#submit-button').should('not.be.disabled').click()
            });
           
          });
        
      });

});