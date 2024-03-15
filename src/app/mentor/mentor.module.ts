import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorListComponent } from './components/mentor-list/mentor-list.component';
import { MaterialModule } from '../material.module';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: "",
    component: MentorListComponent
  }
];

@NgModule({
  declarations: [
    MentorListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports : [
    MentorListComponent,
    DetailComponent
  ]
})
export class MentorModule { }
