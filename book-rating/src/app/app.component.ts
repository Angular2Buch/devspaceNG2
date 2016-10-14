import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Developer Open Space! :-)';

  constructor() {
    setTimeout(() => {
      this.title = 'changed title!!';
    }, 3000);
  }
}