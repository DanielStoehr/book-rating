import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  switchMap,
} from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent {
  searchControl = new FormControl('', { nonNullable: true });
  books$: Observable<Book[]>;

  constructor(private bs: BookStoreService) {
    this.books$ = this.searchControl.valueChanges.pipe(
      filter((value) => value.length > 2),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((value) => this.bs.search(value))
    );
  }
}
