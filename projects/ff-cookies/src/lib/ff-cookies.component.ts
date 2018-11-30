import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ff-cookies',
  templateUrl: './ff-cookies.component.html',
  styleUrls: ['./ff-cookies.component.scss']
})
export class FfCookiesComponent implements OnInit {
  @Input() link = '';
  @Input() linkText = 'cookies policy';
  @Input() agreeText = 'Agree';
  @Input() description = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  @Input() path = '/';
  @Input() expireDays: number | string = 365;

  @Output() onAccept = new EventEmitter();

  flag: boolean;


  cookiesAccept() {
    this.setCookies('ff-cookies', 'accepted', this.expireDays);
    this.onAccept.emit(true);
    this.flag = true;
  }

  private getCookies(name: string) {
    const cookiesArray = document.cookie.split(';');
    const cookieName = `${name}=`;
    let cookie: string;

    for (let i = 0; i < cookiesArray.length; i++) {
      cookie = cookiesArray[i].replace(/^\s+/g, '');
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return '';
  }

  private setCookies(name: string, value: string, expireDays: number | string, path: string = '/') {
    const date = new Date();
    if (typeof expireDays === 'string') {
      expireDays = parseInt(expireDays, 10);
    }
    date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const cookies_path = `; path=${path}`;
    document.cookie = `${name}=${value}; ${expires}${cookies_path}`;
  }

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.flag = this.getCookies('ff-cookies') === 'accepted';
  }

  onClick(e) {
    e.preventDefault();
    this.router.navigate([this.link]);
  }
}
