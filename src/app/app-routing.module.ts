import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';


const routes: Routes = [
  {path: '', redirectTo: 'add-product',pathMatch: 'full'},
  {path: 'add-product',component: AddProductComponent},
  {path: 'edit-product',component: EditProductComponent},
  {path: 'list-products',component: ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
