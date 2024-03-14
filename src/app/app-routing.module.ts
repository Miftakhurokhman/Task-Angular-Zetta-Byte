import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./mentor/mentor.module").then(m => m.MentorModule)
  },
  {
    path: "form",
    loadChildren: () => import("./form/form.module").then(m => m.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
