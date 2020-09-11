import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap/alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImageFilterPipe } from './pipes/filter.pipe';
import { ImageServiceService } from './services/image-service.service';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { ImageDetailsComponent } from './images/image-details/image-details.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PagenotfoundComponent } from './notfound/pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailsComponent,
    ImageFilterPipe,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,

    AlertModule.forRoot()
  ],
  providers: [ImageServiceService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
