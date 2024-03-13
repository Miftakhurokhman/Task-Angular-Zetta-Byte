import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./product/product.module").then(m => m.ProductModule)
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
