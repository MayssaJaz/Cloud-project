import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/dao/book';
import { BookHandlerService } from 'src/app/services/book-handler.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  trash = faTrash;
  ngOnInit(): void {
    this.bookService.getData().subscribe((data) => {
      this.books = data;
    });
  }
  deleteBook(id: any): void {
    this.books = this.books.filter((book) => {
      return book.id != id;
    });
    this.bookService.deleteBook(id).subscribe((data) => {});
  }
  constructor(private bookService: BookHandlerService) {}
}
