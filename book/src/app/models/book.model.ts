export interface Book {
    isbn: string;
    title: string;
    author: string;
    genre: string;
    price: number;
    pages: number;
  }
  
export interface NewBook extends Book {}
