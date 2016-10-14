import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book;
  @Output() rated = new EventEmitter<Book>();

  rateUp() {
    if(this.book.rateUp()) {
      this.rated.emit(this.book);
    }
  }

  rateDown() {
    if(this.book.rateDown()) {
      this.rated.emit(this.book);
    }
  }
}
