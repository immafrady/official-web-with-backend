import { TestBed } from '@angular/core/testing';

import { NewsCenterService } from './news-center.service';

describe('NewsCenterService', () => {
  let service: NewsCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
