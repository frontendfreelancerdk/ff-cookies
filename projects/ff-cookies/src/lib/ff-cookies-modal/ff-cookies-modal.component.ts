import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {FFCookiesService} from '../ff-cookies.service';

// Experimental, not finished component!!

@Component({
  selector: 'ff-cookies-modal',
  templateUrl: './ff-cookies-modal.component.html',
  styleUrls: ['./ff-cookies-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FFCookiesModalComponent implements OnInit {
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
  @Input() acceptSelectedText: string = 'Accept selected';
  @Input() acceptAllText: string = 'Accept all';
  @Output() accepted = new EventEmitter<string[]>();

  flag: boolean;
  cookiesForm: FormGroup;

  constructor(public service: FFCookiesService, private fb: FormBuilder) {

  }

  cookiesAccept(val = []) {
    if (this.service.isBrowser) {
      if (typeof this.setCookies === 'function') {
        this.setCookies();
      } else {
        this.service.setCookies(this.cookieName, this.cookieValue, this.expireDays);
      }
    }
    this.accepted.emit(val);
    this.flag = true;
  }

  ngOnInit() {
    this.cookiesForm = this.fb.group({
      cookies: this.buildCookiesForm()
    });
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

  buildCookiesForm() {
    const arr = this.cookiesSet.map((cookie, index) => {
      return this.fb.control(index === 0 ? {disabled: true, value: true} : false);
    });
    return this.fb.array(arr);
  }

  get cookiesControls() {
    return (this.cookiesForm.get('cookies') as FormArray).controls;
  };

  acceptSelected() {
    const values = [];
    this.cookiesControls.forEach((control, i) => {
      if (control.value) {
        values.push(this.cookiesSet[i]);
      }
    });
    this.cookiesAccept(values);
  }

  acceptAll() {
    this.cookiesAccept(this.cookiesSet);
  }
}
