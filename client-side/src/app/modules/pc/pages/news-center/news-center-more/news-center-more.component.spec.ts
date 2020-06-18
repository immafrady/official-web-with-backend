import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCenterMoreComponent } from './news-center-more.component';

describe('NewsCenterMoreComponent', () => {
  let component: NewsCenterMoreComponent;
  let fixture: ComponentFixture<NewsCenterMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCenterMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCenterMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
