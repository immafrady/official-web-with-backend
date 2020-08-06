import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseCultureMoreComponent } from './enterprise-culture-more.component';

describe('EnterpriseCultureMoreComponent', () => {
  let component: EnterpriseCultureMoreComponent;
  let fixture: ComponentFixture<EnterpriseCultureMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseCultureMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseCultureMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
