import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormActivityComponent } from './components/form-activity/form-activity.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormActivityComponent,
    ListActivitiesComponent,
    AddActivityComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormActivityComponent,
    ListActivitiesComponent,
    AddActivityComponent
  ]
})
export class ActivityModule { }
