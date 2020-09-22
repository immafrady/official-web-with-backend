import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDataBoardComponent } from './big-data-board.component';

describe('BigDataBoardComponent', () => {
  let component: BigDataBoardComponent;
  let fixture: ComponentFixture<BigDataBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigDataBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigDataBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
