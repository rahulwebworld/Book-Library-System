import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { clone } from 'lodash';

@Component({
    selector: 'app-book-library',
    templateUrl: 'book.component.html',
    styleUrls: ['book.component.css']
})

export class BooksComponent implements OnInit {
    books: Book[];
    bookForm = false;
    editBookForm = false;
    isNewForm: boolean;
    newBook: any = {};
    editedBook: any = {};

    constructor(private _bookService: BookService) { }

    ngOnInit() {
      this.getBooks();
    }

    getBooks() {
      this.books = this._bookService.getBooksFromData();
      // let bookitem = localStorage.getItem('books');
    }

    showEditBookForm(book: Book) {
      if (!book) {
        this.bookForm = false;
        return;
      }
      this.editBookForm = true;
      this.editedBook = clone(book);
    }

    showAddBookForm() {
      if (this.books.length) {
        this.newBook = {};
      }
      this.bookForm = true;
      this.isNewForm = true;
    }

    saveBook(book: Book) {
      if (this.isNewForm) {
        this._bookService.addBook(book);
      }
      this.bookForm = false;
    }

    removeBook(book: Book) {
      this._bookService.deleteBook(book);
    }

    updateBook() {
      this._bookService.updateBook(this.editedBook);
      this.editBookForm = false;
      this.editedBook = {};
    }

    cancelNewBook() {
      this.newBook = {};
      this.bookForm = false;
    }

    cancelEdits() {
      this.editedBook = {};
      this.editBookForm = false;
    }

  }
