import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CookiesPageComponent} from './cookies-page/cookies-page.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'cookies', component: CookiesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
