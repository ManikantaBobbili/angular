import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Book } from '../../models/book.model';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {
  //todo: complete missing code

  bookForm : FormGroup;
  submitted : boolean = false;
  successMessage : string | null = '';
  errorMessage : string | null= '';

  constructor(private fb : FormBuilder , private bookService : BookService){
    this.bookForm = fb.group({
      isbn : ['' , [Validators.required]],
      title : ['' , [Validators.required]],
      author : ['' , [Validators.required]],
      genre : ['' , [Validators.required]],
      price : ['' , [Validators.required]],
      pages : ['' , [Validators.required]]
    })
  }

  onAddBook(){
    console.log(this.bookForm.valid);
    if(this.bookForm.valid){
      const newBook : Book = this.bookForm.value;
      console.log(newBook);
      this.submitted = true;
      //console.log(this.bookForm.value);
      this.bookService.addBook(newBook).subscribe({
        next : () => {
          this.successMessage = 'Book added successfully';
          this.errorMessage = null;
          console.log("success log");
          this.bookForm.reset();
          
        },
        error : () => {
          this.errorMessage = 'Failed to add Book';
          this.successMessage = null;
          console.log("error log");
        }
      })
    }
  }

}
