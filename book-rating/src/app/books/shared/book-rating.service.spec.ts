import { BookRatingService } from './book-rating.service';
import { Book } from './book';

describe('BookRatingService', () => {

  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    service = new BookRatingService();
    book = {
      isbn: '000',
      title: 'Test Book',
      description: 'ABC',
      rating: 3 // !!!
    };
  });

  it('should always return new book', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook).not.toBe(book);
  });

  it('it should rate up a book by one', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(4);
  });

  it('it should rate down a book by one', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not be allowed to have a rating smaller than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});