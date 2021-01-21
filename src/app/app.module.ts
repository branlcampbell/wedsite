import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StoryComponent } from './story/story.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';
import { WishingWellComponent } from './wishing-well/wishing-well.component';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomePageComponent,
    StoryComponent,
    RsvpComponent,
    RegistryComponent,
    WishingWellComponent,
    PhotosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
