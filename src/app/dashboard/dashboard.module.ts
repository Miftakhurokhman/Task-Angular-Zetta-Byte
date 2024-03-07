import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TeamModule } from '../team/team.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
  },
];

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TeamModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
})
export class DashboardModule { }
