import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FFCookiesService} from '../ff-cookies.service';

@Component({
  selector: 'ff-cookies',
  templateUrl: './ff-cookies.component.html',
  styleUrls: ['./ff-cookies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FFCookiesComponent implements OnInit {
  @Input() simple = true;
  @Input() cookiesSet: string[] = ['Required'];
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
  @Output() accepted = new EventEmitter<boolean>();

  flag: boolean;


  constructor(public service: FFCookiesService) {

  }

  cookiesAccept() {
    if (this.service.isBrowser) {
      if (typeof this.setCookies === 'function') {
        this.setCookies();
      } else {
        this.service.setCookies(this.cookieName, this.cookieValue, this.expireDays);
      }
    }
    this.accepted.emit(true);
    this.flag = true;
  }


  ngOnInit() {
    if (this.service.isBrowser) {
      if (this.checkCookies) {
        this.flag = this.checkCookies();
      } else {
        this.flag = this.service.getCookies(this.cookieName) === this.cookieValue;
      }
    } else {
      this.flag = true;
    }
  }
}
