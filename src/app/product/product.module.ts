import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './components/list-product/list-product.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { AllProductComponent } from './components/all-product/all-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

const routes: Routes = [
  {
    path: "",
    component: AllProductComponent
  },
  {
    path: "detail",
    component: DetailProductComponent
  }
];

@NgModule({
  declarations: [
    ListProductComponent,
    AllProductComponent,
    DetailProductComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListProductComponent,
    AllProductComponent,
    DetailProductComponent
  ],
})
export class ProductModule { }
