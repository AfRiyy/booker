import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booker';
  books: any;
  constructor(private api: ApiService){}
  ngOnInit(){
    this.getBooks();
  }
  getBooks(){
    this.api.getBooks().subscribe(books => {
      this.books = books;
      let book = JSON.stringify(this.books);
      console.log(book);
    })
  }
}
