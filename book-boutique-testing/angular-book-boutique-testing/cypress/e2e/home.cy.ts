import { BookHandlerService } from 'src/app/services/book-handler.service';
let lengthList=0
describe('Testing home page', () => {
  it('should delete third book', () => {
    cy.visit('/');
    const initialLength = cy.get('tbody >tr').its('length');
    cy.get(
      ':nth-child(3) > :nth-child(6) > a > .ng-fa-icon > .svg-inline--fa > path'
    ).click();
  });

});
