import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // {
  //   path: "list",
  //   loadChildren: () => import('./customer-information/customer-information.module').then(m => m.CustomerInformationModule)
  // },
  {
    path: "list-customer",
    loadChildren: () => import('./customer-information/customer-information.module').then(m => m.CustomerInformationModule)
  },
  {
    path: "form",
    loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
