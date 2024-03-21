import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagementRoutingModule } from './users-management-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { SharedModule } from '../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersManagementRoutingModule,
    MatTableModule,
    MatInputModule
  ]
})
export class UsersManagementModule { }
