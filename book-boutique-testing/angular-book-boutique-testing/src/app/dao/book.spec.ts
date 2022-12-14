import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book("1","name","someone",24,"horror","")).toBeTruthy();
  });
});
