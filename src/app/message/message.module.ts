import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    SuccessAlertComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SuccessAlertComponent,
    PageNotFoundComponent
  ]
})
export class MessageModule { }
