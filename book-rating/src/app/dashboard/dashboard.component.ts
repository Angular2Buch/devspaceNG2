import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';


@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  ratedBook: Book;

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('123456789', 'AngularJS', 'Old but gold', 4),
      new Book('098765432', 'Angular 2', 'Alles ist neu!', 5)
    ];
  }

  reorderBooks(book: Book) {
    console.log(book.title, 'wird sortiert');
    console.log(`Das schöne Buch ${book.title} wird


    sortiert.`);
    this.books.sort((a, b) => b.rating - a.rating);
  }

  showMessage(book: Book) {
    this.ratedBook = book;
    setTimeout(() =>
      this.ratedBook = null, 2000);
  }

}
