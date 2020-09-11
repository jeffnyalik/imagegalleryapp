import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery/gallery/gallery.component';
import { ImageDetailsComponent } from './images/image-details/image-details.component';
import { PagenotfoundComponent } from './notfound/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: 'image-details', component: ImageDetailsComponent},
  {path: 'image-details/:id', component: ImageDetailsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: '', component: GalleryComponent},
  {path: '**', component: PagenotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
