import { Component } from '@angular/core';

import { Book } from '../../models/book.model';
import { BookService } from 'src/app/book.service';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})


export class ViewBookComponent {
  //todo: complete missing code
  isbn : string = '';
  book : any;
  errorMessage : string | null = null;

  constructor(private bookService : BookService){}

  fetchBook() {
    if(this.isbn){
      this.bookService.getBookByIsbn(this.isbn).subscribe({
        next : (book) => {
          if(book){
            this.book = book;
            this.errorMessage = null;
          }else{
            this.errorMessage = 'Book not found';
          }
        },
        error : () => {
          this.errorMessage = "Error fetching book";
        }
      }
      )
    }
  }

}

