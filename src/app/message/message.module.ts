import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';



@NgModule({
  declarations: [
    SuccessAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SuccessAlertComponent
  ]
})
export class MessageModule { }
