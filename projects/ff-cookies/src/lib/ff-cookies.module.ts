import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FFCookiesComponent} from './ff-cookies/ff-cookies.component';
import {FFCookiesModalComponent} from './ff-cookies-modal/ff-cookies-modal.component';
import {FFCookiesAdvancedComponent} from './ff-cookies-advanced/ff-cookies-advanced.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FFTabsComponent} from './ff-cookies-advanced/ff-tabs/ff-tabs.component';
import {FFTabComponent} from './ff-cookies-advanced/ff-tabs/ff-tab/ff-tab.component';
import {FFCookiesTableComponent} from './ff-cookies-advanced/ff-cookies-table/ff-cookies-table.component';


@NgModule({
  declarations: [
    FFCookiesComponent,
    FFCookiesModalComponent,
    FFCookiesAdvancedComponent,
    FFTabsComponent,
    FFTabComponent,
    FFCookiesTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [FFCookiesComponent, FFCookiesModalComponent, FFCookiesAdvancedComponent]
})
export class FFCookiesModule {
}
