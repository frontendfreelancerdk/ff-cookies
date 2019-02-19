import {Component} from '@angular/core';
import {CookiesService} from '@ngx-utils/cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ff-cookies';
  description = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  linkText = 'cookies policy';
  link = 'cookies';
  agreeText = 'Ok';

  constructor(private cookies: CookiesService) {
  }

  checkCookies() {
    console.log('checkCookies', this.cookies.get('key') === 'value');
    return this.cookies.get('key') === 'value';
  }

  setCookies() {
    console.log('setCookies');
    this.cookies.put('key', 'value');
  }
}

