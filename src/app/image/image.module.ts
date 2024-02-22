import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListImagesComponent } from './components/list-images/list-images.component';
import { FormsModule } from '@angular/forms';
import { FormSearchComponent } from './components/form-search/form-search.component';



@NgModule({
  declarations: [
    ListImagesComponent,
    FormSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListImagesComponent,
    FormSearchComponent
  ]
})
export class ImageModule { }
