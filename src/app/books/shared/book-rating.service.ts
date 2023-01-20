import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookRatingService {
  MIN = 1;
  MAX = 5;

  rateUp(book: Book): Book {
    if (book.rating == this.MAX) return book;
    return { ...book, rating: book.rating + 1 };
  }
  rateDown(book: Book): Book {
    if (book.rating == this.MIN) return book;
    return { ...book, rating: book.rating - 1 };
  }
  getMax() {
    return this.MAX;
  }
  getMin() {
    return this.MIN;
  }
}
