import {NgModule} from '@angular/core';
import {FFCookieComponent} from './ff-cookie.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FFCookieComponent],
  exports: [FFCookieComponent]
})
export class FFCookieModule {
}
