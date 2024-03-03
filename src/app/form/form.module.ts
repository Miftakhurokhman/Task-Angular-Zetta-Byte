import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContentComponent } from './form-content/form-content.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    component: FormContentComponent
  },
];


@NgModule({
  declarations: [
    FormContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class FormModule { }
