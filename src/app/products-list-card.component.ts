import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products-list-card.component.html',
  styleUrls: ['./products-list-card.component.css']
})
export class ProductsListCardComponent {
  @Input() product!: Product;
  @Input() index!: Number;
  constructor(){

  }

}
