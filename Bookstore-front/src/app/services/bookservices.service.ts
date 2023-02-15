import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/books';
 

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }
  createBook(book: Book): Observable<Book> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Book>(`${this.baseUrl}`, book,{headers});
  }
}