import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XinTownComponent } from './xin-town.component';

describe('XinTownComponent', () => {
  let component: XinTownComponent;
  let fixture: ComponentFixture<XinTownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XinTownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XinTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
