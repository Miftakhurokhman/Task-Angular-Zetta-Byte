import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: "",
    component: AddEditComponent
  }
];

@NgModule({
  declarations: [
    AddEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    AddEditComponent
  ],
})
export class FormModule { }
