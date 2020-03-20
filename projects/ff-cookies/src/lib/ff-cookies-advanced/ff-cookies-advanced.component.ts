import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {FFCookiesService} from '../ff-cookies.service';
import {expandAnimation} from '../animations/animations';

export interface ICookieTitles {
  name: string;
  provider: string;
  purpose: string;
  expiry: string;
  dataProcessor: string;
  dataProcessorPrivacyPolicy: string;
  type: string;
}

export interface ICookie {
  name: string;
  provider: string;
  purpose: string;
  expiry: string;
  dataProcessor: string;
  dataProcessorPrivacyPolicy: string;
  type: string;
}

export interface ICookiesGroup {
  id: number;
  name: string;
  cookies: ICookie[];
  description: string;
  titles: ICookieTitles;
  required?: boolean;
}

export interface ICookiesSet {
  groups: ICookiesGroup[];
}

@Component({
  selector: 'ff-cookies-advanced',
  templateUrl: './ff-cookies-advanced.component.html',
  styleUrls: ['./ff-cookies-advanced.component.scss'],
  animations: [expandAnimation]
})
export class FFCookiesAdvancedComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  @Input() mainTabsTitle: string[] = ['Declaration', 'About cookies'];
  @Input() simple = true;
  private _cookiesSet: ICookiesSet;
  get cookiesSet(): ICookiesSet {
    return this._cookiesSet;
  }

  @Input() set cookiesSet(val: ICookiesSet) {
    this._cookiesSet = val;
    if (this.cookiesSet) {
      for (const g of this.cookiesSet.groups) {
        if (g.required) {
          this.selectedCookiesGroups.add(g.id);
        }
      }
    }
  }

  @Input() link = '';
  @Input() linkText = 'cookies policy';
  @Input() toggleText = 'Show details';
  @Input() agreeText = 'Agree';
  @Input() description = 'We use cookies to ensure you the best experience. By clicking around the site you accept our ';
  @Input() path = '/';
  @Input() expireDays: number | string = 365;
  @Input() cookieName = 'ff-cookies';
  @Input() cookieValue = 'accepted';
  @Input() checkCookies: () => boolean;
  @Input() setCookies: () => void;
  @Input() acceptSelectedText = 'Accept selected';
  @Input() acceptAllText = 'Accept all';
  @Output() accepted = new EventEmitter<string[]>();

  flag: boolean;
  isOpen: boolean;
  animationState = 'closed';
  index: number;
  selectedCookiesGroups = new Set();

  constructor(public service: FFCookiesService, private renderer: Renderer2) {

  }

  cookiesAccept(val = []) {
    if (this.service.isBrowser) {
      if (typeof this.setCookies === 'function') {
        this.setCookies();
      } else {
        this.service.setCookies(this.cookieName, this.cookieValue, this.expireDays);
      }
    }
    if (val.length === 0 && this.cookiesSet && this.cookiesSet.groups) {
      val = this.cookiesSet.groups.map(group => group.id);
    }
    this.accepted.emit(val);
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

  toggle() {
    this.animationState = this.animationState === 'open' ? 'closed' : 'open';
  }

  animationStart(event: any) {
    if (event.fromState === 'void') {
      return;
    }
    this.isOpen = false;
    this.container && this.renderer.setStyle(this.container.nativeElement, 'overflow-y', 'hidden');
  }

  animationDone(event: any) {
    if (event.fromState === 'void') {
      return;
    }
    this.isOpen = event.toState === 'open';
    this.container && this.renderer.setStyle(this.container.nativeElement, 'overflow-y', this.isOpen ? 'auto' : 'hidden');
  }

  selectedHandler(value: boolean, id) {
    if (value) {
      this.selectedCookiesGroups.add(id);
    } else {
      this.selectedCookiesGroups.delete(id);
    }
  }

  cookiesChecked() {
    this.cookiesAccept(Array.from(this.selectedCookiesGroups));
  }
}
