import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

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
  @Input() checkCookies = () => false;
  @Input() setCookies = () => {};
  @Output() accept = new EventEmitter();

  flag: boolean;


  cookiesAccept() {
    this.setCookies();
    this.accept.emit(true);
    this.flag = true;
  }

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.flag = this.checkCookies();
  }

  onClick(e) {
    e.preventDefault();
    this.router.navigate([this.link]);
  }
}
