import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root' // Angular 6 way
})
export class BookRatingService {

  private minRating = 1;
  private maxRating = 5;

  rateUp(book: Book): Book {
    return {
      ...book,
      rating: Math.min(this.maxRating, book.rating + 1) // :-)
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: book.rating > this.minRating ? book.rating - 1 : book.rating
    };
  }
}
