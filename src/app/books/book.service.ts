import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOK_ITEMS } from './book-data';
import { findIndex } from 'lodash';

@Injectable()
export class BookService {
  private bItems = BOOK_ITEMS;

  getBooksFromData(): Book[] {
    console.log(this.bItems);
    return this.bItems;
   // localStorage.setItem('books', JSON.stringify(this.bItems));
  }

  addBook(book: Book) {
    this.bItems.push(book);
    console.log(this.bItems);
  }

  updateBook(book: Book) {
    let index = findIndex(this.bItems, (b: Book) => {
      return b.id === book.id;
    });
    this.bItems[index] = book;
  }

  deleteBook(book: Book) {
    this.bItems.splice(this.bItems.indexOf(book), 1);
    console.log(this.bItems);
  }

}
