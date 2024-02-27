import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGuitarComponent } from './components/list-guitar/list-guitar.component';
import { DetailGuitarComponent } from './components/detail-guitar/detail-guitar.component';
import { GuitarInformationComponent } from './guitar-information/guitar-information.component';
import { GuitarService } from '../shared/guitar.service';
import { MessageModule } from '../message/message.module';



@NgModule({
  declarations: [
    ListGuitarComponent,
    DetailGuitarComponent,
    GuitarInformationComponent
  ],
  imports: [
    CommonModule,
    MessageModule
  ],
  exports: [
    ListGuitarComponent,
    DetailGuitarComponent,
    GuitarInformationComponent
  ],
  providers: [GuitarService]
})
export class GuitarModule { }
