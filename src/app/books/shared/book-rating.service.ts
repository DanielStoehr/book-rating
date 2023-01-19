import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookRatingService {
  min = 1;
  max = 5;

  rateUp(book: Book): Book {
    if (book.rating == this.max) return book;
    return { ...book, rating: book.rating + 1 };
  }
  rateDown(book: Book): Book {
    if (book.rating == this.min) return book;
    return { ...book, rating: book.rating - 1 };
  }
  getMax() {
    return this.max;
  }
  getMin() {
    return this.min;
  }
}
