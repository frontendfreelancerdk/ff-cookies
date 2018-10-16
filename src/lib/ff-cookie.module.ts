import {NgModule} from '@angular/core';
import {FFCookieComponent} from './ff-cookie.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FFCookieComponent],
  exports: [FFCookieComponent]
})
export class FFCookieModule {
}
