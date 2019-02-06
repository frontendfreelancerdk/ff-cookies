import {Component, EventEmitter, Input, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'ff-cookies',
  templateUrl: './ff-cookies.component.html',
  styleUrls: ['./ff-cookies.component.scss']
})
export class FFCookiesComponent implements OnInit {
  @Input() link: string = '';
  @Input() linkText: string = 'cookies policy';
  @Input() agreeText: string = 'Agree';
  @Input() description: string = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  @Input() path: string = '/';
  @Input() expireDays: number | string = 365;

  @Output() onAccept = new EventEmitter();

  flag: boolean;


  cookiesAccept() {
    this.setCookies('ff-cookies', 'accepted', this.expireDays);
    this.onAccept.emit(true);
    this.flag = true;
  }

  private getCookies(name: string) {
    console.log('isPlatformBrowser(PLATFORM_ID)', isPlatformBrowser(PLATFORM_ID));

    if (isPlatformBrowser(PLATFORM_ID)) {
      const cookiesArray = document.cookie.split(';');
      const cookieName = `${name}=`;
      let cookie: string;

      for (let i = 0; i < cookiesArray.length; i++) {
        cookie = cookiesArray[i].replace(/^\s+/g, '');
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }
    }
    return '';
  }

  private setCookies(name: string, value: string, expireDays: number | string, path: string = '/') {
    console.log('isPlatformBrowser(PLATFORM_ID)', isPlatformBrowser(PLATFORM_ID));

    if (isPlatformBrowser(PLATFORM_ID)) {
      const date = new Date();
      if (typeof expireDays === 'string') {
        expireDays = parseInt(expireDays, 10);
      }
      date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      const cpath = `; path=${path}`;
      document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
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
