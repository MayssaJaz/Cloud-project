import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BookHandlerService } from 'src/app/services/book-handler.service';
import { HomeComponent } from '../home/home.component';

import { AddBookComponent } from './add-book.component';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let genres = [
    'Horror',
    'Adventure',
    'Fantasy',
    'Detective',
    'Historical',
    'Science Fiction',
    'Romance',
  ];
  let books=[
    {
      createdAt: '2022-04-07T22:11:32.292Z',
      name: 'Randall Prohaska',
      author: 'Dr. Laura Gutmann',
      genre: 'Horror',
      pages: 75552,
      id: '3',
    },
    {
      createdAt: '2022-04-07T22:11:32.292Z',
      name: 'Harry Potter',
      author: 'Joanne Rowling',
      genre: 'Fantasy',
      pages: 75552,
      id: '4',
    },
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBookComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        {
          provide: BookHandlerService,
          useValue: {
            addBook:(book: { createdAt: string; name: string; author: string; genre: string; pages: number; id: string; })=>{books.push(book)},
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should contain `Book's name`", () => {
    const fixture = TestBed.createComponent(AddBookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#book-label')?.textContent).toContain(
      "Book's name"
    );
  });
  it('should verify the submit button is disabled', () => {
    const fixture = TestBed.createComponent(AddBookComponent);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('#submit-button').disabled
    ).toBeTrue();
  });

  it('should contain `Author`', () => {
    const fixture = TestBed.createComponent(AddBookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#author-label')?.textContent).toContain(
      'Author:'
    );
  });
  it('should contain `Genre`', () => {
    const fixture = TestBed.createComponent(AddBookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#genre-label')?.textContent).toContain(
      'Genre'
    );
  });
  it("should contain `Book's number of pages`", () => {
    const fixture = TestBed.createComponent(AddBookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#pages-label')?.textContent).toContain(
      "Book's number of pages"
    );
  });
  it('should verify form is properly filled`', () => {
    component.bookForm.setValue({
      name: 'Game of Thrones',
      author: 'George R. R. Martin',
      pages: 3,
      genre: 'Romance',
    });
    expect(component.bookForm.valid).toEqual(true);
  });
  it('should verify pages is not filled properly', () => {
    component.bookForm.controls['pages'].setValue(0);
    expect(component.bookForm.controls['pages'].valid).toEqual(false);
  });
  it('should verify pages is filled properly', () => {
    component.bookForm.controls['pages'].setValue(5);
    expect(component.bookForm.controls['pages'].valid).toEqual(true);
  });
  it('should verify genre is filled properly', () => {
    component.bookForm.controls['genre'].setValue('Romance');
    expect(
      genres.indexOf(component.bookForm.controls['genre'].value)
    ).toBeGreaterThan(0);
  });
  it('should verify genre is not filled properly', () => {
    component.bookForm.controls['genre'].setValue('Comedy');
    expect(
      genres.indexOf(component.bookForm.controls['genre'].value)
    ).toBeLessThan(0);
  });
});
