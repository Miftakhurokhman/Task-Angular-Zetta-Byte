import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: DashboardContentComponent
  },
];




@NgModule({
  declarations: [
    DashboardContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DashboardContentComponent
  ],
})
export class DashboardModule { }
