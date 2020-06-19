import { TestBed } from '@angular/core/testing';

import { NewsLIstService } from './news-list.service';

describe('NewsLIstService', () => {
  let service: NewsLIstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsLIstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
