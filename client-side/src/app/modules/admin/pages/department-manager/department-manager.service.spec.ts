import { TestBed } from '@angular/core/testing';

import { DepartmentManagerService } from './department-manager.service';

describe('DepartmentManagerService', () => {
  let service: DepartmentManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
