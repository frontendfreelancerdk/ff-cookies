import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FFCookiesService {
  public isBrowser: boolean;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public setCookies(name: string, value: string, expireDays: number | string, path: string = '/') {
    if (this.isBrowser) {
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

  public getCookies(name: string) {
    if (this.isBrowser) {
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

  public navigate(event) {
    if (this.isBrowser) {
      const {target} = event;
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
