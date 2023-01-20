import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  books: Book[] = [];

  constructor(public rs: BookRatingService, private bs: BookStoreService) {
    this.getBookList();
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    this.books = this.books.map((b) => {
      if (b.isbn === ratedBook.isbn) return ratedBook;
      return b;
    });
  }

  private getBookList() {
    this.bs.getAll().subscribe((books) => {
      this.books = books;
    });
  }

  resetBooks() {
    this.bs.reset().subscribe(() => {
      this.getBookList();
    });
  }

  doDeleteBook(book: Book) {
    this.bs.delete(book.isbn).subscribe(() => {
      this.getBookList();
    });
  }
}
