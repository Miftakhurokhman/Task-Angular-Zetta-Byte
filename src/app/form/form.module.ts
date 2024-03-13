import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUpdateFormComponent } from './components/add-update-form/add-update-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: "",
    component: AddUpdateFormComponent
  }    
];

@NgModule({
  declarations: [
    AddUpdateFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    AddUpdateFormComponent
  ]
})
export class FormModule { }
