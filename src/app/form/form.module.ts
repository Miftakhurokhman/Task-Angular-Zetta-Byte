import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUpdatePlayerComponent } from './components/add-update-player/add-update-player.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    component: AddUpdatePlayerComponent,
  },
];


@NgModule({
  declarations: [
    AddUpdatePlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [
    AddUpdatePlayerComponent
  ],
})
export class FormModule { }
