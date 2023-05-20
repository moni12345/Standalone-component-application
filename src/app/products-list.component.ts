import { ProductsService } from './products.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListCardComponent } from './products-list-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductsListCardComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
       constructor(readonly productsService: ProductsService){
        
       }
}
