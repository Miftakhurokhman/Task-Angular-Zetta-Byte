import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { DetailImageComponent } from './components/detail-image/detail-image.component';



@NgModule({
  declarations: [
    ImageCardComponent,
    DetailImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageCardComponent,
    DetailImageComponent
  ]
})
export class ImageModule { }
