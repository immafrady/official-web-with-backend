import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductXinpayrollManagerComponent } from './product-xinpayroll-manager.component';

describe('ProductXinpayrollManagerComponent', () => {
  let component: ProductXinpayrollManagerComponent;
  let fixture: ComponentFixture<ProductXinpayrollManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductXinpayrollManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductXinpayrollManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
