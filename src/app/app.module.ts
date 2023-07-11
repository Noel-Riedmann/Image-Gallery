import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerytemplateComponent } from './gallerytemplate/gallerytemplate.component';
import { NggalleryComponent } from './nggallery/nggallery.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GallerytemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NggalleryComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
