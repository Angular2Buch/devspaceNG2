import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  ratedBook: Book;

  constructor(private store: BookStoreService) { }

  ngOnInit() {
    this.books = this.store.getAll();
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  showMessage(book: Book) {
    this.ratedBook = book;
    setTimeout(() =>
      this.ratedBook = null, 2000);
  }

}
