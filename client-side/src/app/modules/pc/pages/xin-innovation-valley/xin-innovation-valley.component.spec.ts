import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XinInnovationValleyComponent } from './xin-innovation-valley.component';

describe('XinInnovationValleyComponent', () => {
  let component: XinInnovationValleyComponent;
  let fixture: ComponentFixture<XinInnovationValleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XinInnovationValleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XinInnovationValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
