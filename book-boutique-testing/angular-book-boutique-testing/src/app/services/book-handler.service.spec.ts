import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BookHandlerService } from './book-handler.service';

describe('BookHandlerService', () => {
  let service: BookHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(BookHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
