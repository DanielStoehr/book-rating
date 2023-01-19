import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookRatingService {
  constructor() {}

  rateUp(book: Book): Book {
    if (book.rating == 5) return book;
    return { ...book, rating: book.rating + 1 };
  }
  rateDown(book: Book): Book {
    if (book.rating == 1) return book;
    return { ...book, rating: book.rating - 1 };
  }
}
