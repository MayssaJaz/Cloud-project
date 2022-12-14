import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { BookHandlerService } from 'src/app/services/book-handler.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: BookHandlerService,
          useValue: {
            getData: () =>
              of([
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
              ]),
            deleteBook: (id: string) => {
              return new Observable<string>((observer) => {
                setInterval(() =>
                  observer.next(
                    {
                      createdAt: '2022-04-07T22:11:32.292Z',
                      name: 'Randall Prohaska',
                      author: 'Dr. Laura Gutmann',
                      genre: 'Horror',
                      pages: 75552,
                      id: '3',
                    }.toString()
                  )
                );
              });
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain `Book`', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#book-col')?.textContent).toContain('Book');
  });

  it('should contain `Posted at`', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#posted-col')?.textContent).toContain(
      'Posted at'
    );
  });

  it('should contain `Author`', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#author-col')?.textContent).toContain(
      'Author'
    );
  });
  it('should contain `N° Pages`', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#pages-col')?.textContent).toContain(
      'N° Pages'
    );
  });

  it('should contain `Genre`', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#genre-col')?.textContent).toContain(
      'Genre'
    );
  });

  it('should contain `Action`', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#action-col')?.textContent).toContain(
      'Action'
    );
  });
  it('should have the same content', () => {
    component = fixture.componentInstance;
    expect(component.books).toEqual([
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
    ]);
  });
  it('should delete the right item', () => {
    component = fixture.componentInstance;
    component.deleteBook(3);
    expect(component.books).toEqual([
      {
        createdAt: '2022-04-07T22:11:32.292Z',
        name: 'Harry Potter',
        author: 'Joanne Rowling',
        genre: 'Fantasy',
        pages: 75552,
        id: '4',
      },
    ]);
  });


});