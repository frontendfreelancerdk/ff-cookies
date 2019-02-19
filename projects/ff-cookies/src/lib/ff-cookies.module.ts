import {NgModule} from '@angular/core';
import {FFCookiesComponent} from './ff-cookies.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FFCookiesComponent],
  exports: [FFCookiesComponent]
})
export class FFCookiesModule {
}
