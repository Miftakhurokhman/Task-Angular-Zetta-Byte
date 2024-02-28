import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsInformationComponent } from './products-information/products-information.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsInformationComponent,
    AddProductComponent,
    ListProductComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductsInformationComponent,
    AddProductComponent,
    ListProductComponent,
    DetailProductComponent
  ]
})
export class ProductModule { }