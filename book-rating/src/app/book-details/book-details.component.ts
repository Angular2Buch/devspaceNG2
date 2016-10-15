import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // HIER

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute,
              private store: BookStoreService) { }

  ngOnInit() {
    let isbn = this.route.snapshot.params['isbn'];
    this.book = this.store.getSingle(isbn)
  }

}
