import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list.component';
import { ProductViewComponent } from './product-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: ProductsListComponent },
  // Lazy loading on a component level
  { path: 'details/:index', loadComponent: () => import('./product-view.component').then(m => m.ProductViewComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
