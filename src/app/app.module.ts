import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StoryComponent } from './story/story.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { PhotosComponent } from './photos/photos.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomePageComponent,
    StoryComponent,
    RsvpComponent,
    RegistryComponent,
    GuestbookComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
