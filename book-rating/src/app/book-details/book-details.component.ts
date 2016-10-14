import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // HIER

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  isbn: string;

  constructor(private route: ActivatedRoute) { } // DA

  ngOnInit() {
    this.isbn = this.route.snapshot.params['isbn'];
  }

}
