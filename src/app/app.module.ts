import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerytemplateComponent } from './gallerytemplate/gallerytemplate.component';
import { LightGalleryComponent } from './light-gallery/light-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GallerytemplateComponent,
    LightGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
