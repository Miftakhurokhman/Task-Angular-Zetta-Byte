import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionAppComponent } from './components/description-app/description-app.component';
import { ContentDescriptionComponent } from './components/content-description/content-description.component';



@NgModule({
  declarations: [
    DescriptionAppComponent,
    ContentDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DescriptionAppComponent,
    ContentDescriptionComponent
  ],
})
export class AboutModule { }
