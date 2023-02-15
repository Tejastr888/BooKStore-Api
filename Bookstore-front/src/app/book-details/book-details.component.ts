import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent implements OnInit {
  constructor(private router: Router){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   book = 
    {
      title: 'To Kill a Mockingbird',
      description: 'A Pulitzer Prize-winning novel set in the Deep South of the 1930s.',
      imageURL:'https://picsum.photos/200/300',
      author:'someone',
      unitcost: 9.99,
      isbn: '9780446310789',
      nbofPages: 281,
      language: 'English'
    }
    delete(){
      // invoke the RestApi
      this.router.navigate(['/book-list']);

    }

}
