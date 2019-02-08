import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FFCookiesModule} from 'ff-cookies';
import {CookiesPageComponent} from './cookies-page/cookies-page.component';
import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './home-page/home-page.component';
import {BrowserCookiesModule} from '@ngx-utils/cookies/browser';

@NgModule({
  declarations: [
    AppComponent,
    CookiesPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FFCookiesModule,
    AppRoutingModule,
    BrowserCookiesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
