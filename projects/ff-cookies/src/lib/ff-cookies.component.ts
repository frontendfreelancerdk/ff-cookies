import {Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'ff-cookies',
  templateUrl: './ff-cookies.component.html',
  styleUrls: ['./ff-cookies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FFCookiesComponent implements OnInit {
  @Input() link = '';
  @Input() linkText = 'cookies policy';
  @Input() agreeText = 'Agree';
  @Input() description = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  @Input() path = '/';
  @Input() expireDays: number | string = 365;
  @Input() cookieName = 'ff-cookies';
  @Input() cookieValue = 'accepted';
  @Input() checkCookies: () => boolean;
  @Input() setCookies: () => void;
  @Output() accept = new EventEmitter();

  flag: boolean;

  constructor(public router: Router, @Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: Document) {
  }

  cookiesAccept() {
    if (isPlatformBrowser(this.platformId)) {
      if (typeof this.setCookies === 'function') {
        this.setCookies();
      } else {
        this._setCookies(this.cookieName, this.cookieValue, this.expireDays);
      }
    }
    this.accept.emit(true);
    this.flag = true;
  }

  private _getCookies(name: string) {
    if (isPlatformBrowser(this.platformId)) {
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

  private _setCookies(name: string, value: string, expireDays: number | string, path: string = '/') {
    if (isPlatformBrowser(this.platformId)) {
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


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.checkCookies) {
        this.flag = this.checkCookies();
      } else {
        this.flag = this._getCookies(this.cookieName) === this.cookieValue;
      }
    } else {
      this.flag = true;
    }
  }

  _navigate(e) {
    if (isPlatformBrowser(this.platformId)) {
      const {target} = e;
      if (target && target.href) {
        const href = target.href;
        if (~href.indexOf('#') && ~href.indexOf(window.location.origin)) {
          event.preventDefault();
          const anchor = href.slice(href.indexOf('#') + 1);
          let link = window.location.href;
          if (~window.location.href.indexOf('#')) {
            link = window.location.href.slice(0, (window.location.href.indexOf('#') + 1));
          }
          link = link.replace(window.location.origin, '');
          this.router.navigate(link.split('/'), {fragment: anchor});
        } else if (~href.indexOf(window.location.origin)) {
          event.preventDefault();
          const link = href.replace(window.location.origin, '');
          this.router.navigate([link]);
        }
      }
    }
  }
}
