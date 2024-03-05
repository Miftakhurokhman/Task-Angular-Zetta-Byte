import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "list-customer",
    loadChildren: () => import('./customer-information/customer-information.module').then(m => m.CustomerInformationModule)
  },
  {
    path: "form",
    loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  }, 
  {
    path: "**",
    loadChildren: () => import('./message/message.module').then(m => m.MessageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
