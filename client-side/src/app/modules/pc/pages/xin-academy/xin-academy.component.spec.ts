import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XinAcademyComponent } from './xin-academy.component';

describe('XinAcademyComponent', () => {
  let component: XinAcademyComponent;
  let fixture: ComponentFixture<XinAcademyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XinAcademyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XinAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
