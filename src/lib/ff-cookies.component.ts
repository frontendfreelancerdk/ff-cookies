import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ff-cookie',
  templateUrl: './ff-cookies.component.html',
  styleUrls: ['./ff-cookies.component.scss']
})
export class FfCookiesComponent implements OnInit {
  @Input() link: string = '';
  @Input() linkText: string = 'cookie policy';
  @Input() agreeText: string = 'Agree';
  @Input() description: string = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  @Input() path: string = '/';
  @Input() expireDays: number | string = 365;

  @Output() onAccept = new EventEmitter();

  flag: boolean;


  coocieAccept() {
    this.setCookie('ff-cookies', 'accepted', this.expireDays);
    this.onAccept.emit(true);
    this.flag = true;
  }

  private getCookie(name: string) {
    const cookieArray = document.cookie.split(';');
    const cookieName = `${name}=`;
    let cookie: string;

    for (let i: number = 0; i < cookieArray.length; i++) {
      cookie = cookieArray[i].replace(/^\s+/g, '');
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return '';
  }

  private setCookie(name: string, value: string, expireDays: number | string, path: string = '/') {
    const date = new Date();
    if (typeof expireDays === 'string') {
      expireDays = parseInt(expireDays, 10);
    }
    date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const cpath = `; path=${path}`;
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.flag = this.getCookie('ff-cookies') === 'accepted';
  }

  onClick(e) {
    e.preventDefault();
    this.router.navigate([this.link]);
  }
}
