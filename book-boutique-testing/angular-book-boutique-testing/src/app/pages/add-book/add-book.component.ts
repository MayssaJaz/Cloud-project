import { Component, OnInit } from '@angular/core';
import { BookHandlerService } from 'src/app/services/book-handler.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  genres: any;
  bookForm = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    pages: new FormControl('', [Validators.required, Validators.min(2)]),
  });
  addBook() {
    this.bookService.addBook(this.bookForm.value).subscribe((data) => {
      this.router.navigate(['']);
    });
  }

  ngOnInit(): void {
    this.genres = this.bookService.Genres;
  }
  constructor(
    private bookService: BookHandlerService,
    private router: Router
  ) {}
}
