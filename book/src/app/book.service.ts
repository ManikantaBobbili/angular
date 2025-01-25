import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './models/book.model';
import { environment } from 'src/environments/environment';
// import { Book } from './models/book.model';
// import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) {}

  getBooks(): Observable<Book[]> {
  //todo: complete missing code
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookByIsbn(isbn: string): Observable<Book | undefined> {
    //todo: complete missing code
    return this.http.get<Book[]>(this.apiUrl+`/proxy/3000/books/?isbn=${isbn}`).pipe(
      map(books => {return books.length > 0 ? books[0] : undefined;
      })
    );
  }

  addBook(book: Book): Observable<Book> {
     //todo: complete missing code
     return this.http.post<Book>(this.apiUrl , book);
  }
}

