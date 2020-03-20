import {Component, Input} from '@angular/core';
import {ICookiesGroup} from '../ff-cookies-advanced.component';

@Component({
  selector: 'ff-cookies-table',
  templateUrl: './ff-cookies-table.component.html',
  styleUrls: ['./ff-cookies-table.component.scss']
})
export class FFCookiesTableComponent {
  @Input() cookiesGroup: ICookiesGroup;
}
