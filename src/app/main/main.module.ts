import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { AllPlaceComponent } from './components/all-place/all-place.component';



@NgModule({
  declarations: [
    BannerComponent,
    AllPlaceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    AllPlaceComponent
  ],
})
export class MainModule { }
