import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIntroComponent } from './product-intro.component';

describe('ProductIntroComponent', () => {
  let component: ProductIntroComponent;
  let fixture: ComponentFixture<ProductIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
