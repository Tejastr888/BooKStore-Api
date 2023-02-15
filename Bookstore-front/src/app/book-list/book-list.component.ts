import { Component, OnInit } from '@angular/core';
import { Book } from '../services/book';
import { BookService } from '../services/bookservices.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks()
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }
}