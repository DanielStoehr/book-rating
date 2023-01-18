import { Component, Input } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book?: Book;
}
