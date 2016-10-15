import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

@Injectable()
export class BookStoreService {
  books: Book[];

  constructor() {
    this.books = [
      new Book('123456789', 'AngularJS', 'Old but gold', 4),
      new Book('098765432', 'Angular 2', 'Alles ist neu!', 5)
    ];
  }

  getAll() {
    return this.books;
  }

  getSingle(isbn: string) {
    return this.books.find((book) => book.isbn === isbn);
  }
}
