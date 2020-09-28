import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDataManageComponent } from './big-data-manage.component';

describe('BigDataManageComponent', () => {
  let component: BigDataManageComponent;
  let fixture: ComponentFixture<BigDataManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigDataManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigDataManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
