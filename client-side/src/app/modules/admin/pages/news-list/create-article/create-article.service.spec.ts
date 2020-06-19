import { TestBed } from '@angular/core/testing';

import { CreateArticleService } from './create-article.service';

describe('CreateArticleService', () => {
  let service: CreateArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
