import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cookies-page',
  templateUrl: './cookies-page.component.html',
  styleUrls: ['./cookies-page.component.scss']
})
export class CookiesPageComponent {
  constructor(private router: Router){

  }
  backToHome(){
    this.router.navigate(['']);
  }
}
