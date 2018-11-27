import {NgModule} from '@angular/core';
import {FfCookiesComponent} from './ff-cookies.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FfCookiesComponent],
  exports: [FfCookiesComponent]
})
export class FfCookiesModule {
}
