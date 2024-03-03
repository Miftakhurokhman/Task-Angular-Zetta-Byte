import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerContentComponent } from './components/customer-content/customer-content.component';
import { RouterModule, Routes } from '@angular/router';
import { ListContentComponent } from './components/list-content/list-content.component';

const routes: Routes = [
  {
    path: "",
    component: ListContentComponent
  },
  {
    path: "detail",
    component: CustomerContentComponent
  },
];


@NgModule({
  declarations: [
    CustomerContentComponent,
    ListContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerInformationModule { }
