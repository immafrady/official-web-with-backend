import { TestBed } from '@angular/core/testing';

import { EditPictureService } from './edit-picture.service';

describe('EditPictureService', () => {
  let service: EditPictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
