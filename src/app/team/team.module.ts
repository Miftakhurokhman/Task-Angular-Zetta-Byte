import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlayerComponent } from './components/list-player/list-player.component';
import { DetailPlayerComponent } from './components/detail-player/detail-player.component';
import { RouterModule, Routes } from '@angular/router';
import { Search } from '../search.pipe';

const routes: Routes = [
  {
    path: "player",
    component: DetailPlayerComponent,
  },
];

@NgModule({
  declarations: [
    ListPlayerComponent,
    DetailPlayerComponent,
    Search
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ListPlayerComponent,
    DetailPlayerComponent
  ],
})
export class TeamModule { }
