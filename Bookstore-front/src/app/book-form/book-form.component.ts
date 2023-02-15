import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../services/book';
import { BookService } from '../services/bookservices.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styles: [
  ]
})

export class BookFormComponent implements OnInit {
  defaultDate: Date = new Date();
  book:Book={title:'',
    id:0,
    price:0,
    isbn:'',
    description:'',
    unitCost:0,
    publicationDate:this.defaultDate,
    nbOfPages:0,
    imgUrl:'',
    language:0,
  };
  constructor(private router:Router,private bookservice:BookService){}
  onSubmit() {
    this.bookservice.createBook(this.book).subscribe(
      (response) => {
        console.log('Book created successfully:', response);
      },
      (error) => {
        console.log('Error creating book:', error);
      }
    );
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
