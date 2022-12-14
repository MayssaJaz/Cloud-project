import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CONSTANTS } from 'src/config/constants';

@Injectable({
  providedIn: 'root',
})
export class BookHandlerService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };
  Genres = [
    'Horror',
    'Adventure',
    'Fantasy',
    'Detective',
    'Historical',
    'Science Fiction',
    'Romance',
  ];
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(CONSTANTS.getBooks);
  }
  deleteBook(id: string): Observable<any> {
    return this.http.delete(CONSTANTS.deleteBook + '/' + id);
  }
  addBook(book: any): Observable<any> {
    return this.http.post(CONSTANTS.addBook, book);
  }
}
