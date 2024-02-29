import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { ProductsInformationComponent } from './products-information/products-information.component';
import { AddUpdateProductComponent } from './components/add-update-product/add-update-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { FormsModule } from '@angular/forms';
import { MessageModule } from '../message/message.module';



@NgModule({
  declarations: [
    //ProductsInformationComponent,
    AddUpdateProductComponent,
    ListProductComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MessageModule,
    RouterModule
  ],
  exports: [
    //ProductsInformationComponent,
    AddUpdateProductComponent,
    ListProductComponent,
    DetailProductComponent
  ]
})
export class ProductModule { }
