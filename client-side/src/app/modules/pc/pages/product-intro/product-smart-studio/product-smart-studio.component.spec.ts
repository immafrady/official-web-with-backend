import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSmartStudioComponent } from './product-smart-studio.component';

describe('ProductSmartStudioComponent', () => {
  let component: ProductSmartStudioComponent;
  let fixture: ComponentFixture<ProductSmartStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSmartStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSmartStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
