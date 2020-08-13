import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecruitInfoComponent } from './edit-recruit-info.component';

describe('EditRecruitInfoComponent', () => {
  let component: EditRecruitInfoComponent;
  let fixture: ComponentFixture<EditRecruitInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecruitInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecruitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
