import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './app-routing.module';
import { MessageModule } from './message/message.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './product/components/list-product/list-product.component';
import { DetailProductComponent } from './product/components/detail-product/detail-product.component';
import { PageNotFoundComponent } from './message/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: "",
    component: ListProductComponent
  },
  {
    path: "detail/:id",
    component: DetailProductComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductModule,
    MessageModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
