import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { StoryComponent } from './story/story.component';
import { RegistryComponent } from './registry/registry.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'story', component: StoryComponent },
  { path: 'registry', component: RegistryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
