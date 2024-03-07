import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: "list-player",
    loadChildren: () => import("./team/team.module").then(m => m.TeamModule)
  },
  {
    path: "form",
    loadChildren: () => import("./form/form.module").then(m => m.FormModule)
  },
  {
    path: "list-player",
    loadChildren: () => import("./team/team.module").then(m => m.TeamModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
