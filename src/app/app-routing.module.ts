import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { StoryComponent } from './story/story.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';
import { WishingWellComponent } from './wishing-well/wishing-well.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'story', component: StoryComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'wishingwell', component: WishingWellComponent },
  { path: 'photos', component: PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
