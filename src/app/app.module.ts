import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FfCookiesModule} from '../../projects/ff-cookies/src/lib/ff-cookies.module';
import { CookiesPageComponent } from './cookies-page/cookies-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CookiesPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FfCookiesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
