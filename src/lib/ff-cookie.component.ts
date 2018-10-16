import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ff-cookie',
  templateUrl: './ff-cookie.component.html',
  styleUrls: ['./ff-cookie.component.scss']
})
export class FFCookieComponent implements OnInit {
  @Input() link: string = '';
  @Input() description: string = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  @Input() path: string = '/';
  @Input() expireDays: number = 365;

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

  private setCookie(name: string, value: string, expireDays: number, path: string = '/') {
    const date = new Date();
    date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const cpath = `; path=${path}`;
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  constructor() {
  }

  ngOnInit() {
    this.flag = this.getCookie('ff-cookies') === 'accepted';
    console.log(this.getCookie('ff-cookies'));
  }

}
