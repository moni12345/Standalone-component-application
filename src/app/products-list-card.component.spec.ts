import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListCardComponent } from './products-list-card.component';

describe('ProductsListCardComponent', () => {
  let component: ProductsListCardComponent;
  let fixture: ComponentFixture<ProductsListCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductsListCardComponent]
    });
    fixture = TestBed.createComponent(ProductsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
