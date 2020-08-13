import { TestBed } from '@angular/core/testing';

import { RecruitmentManagerService } from './recruitment-manager.service';

describe('RecruitmentManagerService', () => {
  let service: RecruitmentManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitmentManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
