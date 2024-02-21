import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { DetailVideoComponent } from './components/detail-video/detail-video.component';



@NgModule({
  declarations: [
    VideoCardComponent,
    DetailVideoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VideoCardComponent,
    DetailVideoComponent
  ]
})
export class VideoModule { }
