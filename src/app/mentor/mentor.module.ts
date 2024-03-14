import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorListComponent } from './components/mentor-list/mentor-list.component';
import { MaterialModule } from '../material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: MentorListComponent
  }
];

@NgModule({
  declarations: [
    MentorListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports : [
    MentorListComponent
  ]
})
export class MentorModule { }
