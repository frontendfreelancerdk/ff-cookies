import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FFCookiesComponent} from './ff-cookies.component';
import {FFCookiesService} from '../ff-cookies.service';

class ServiceStub {
  isBrowser = true;

  setCookies() {
  }

  getCookies() {
  }

  navigate() {
  }
}

describe('FFCookiesComponent', () => {
  let component: FFCookiesComponent;
  let fixture: ComponentFixture<FFCookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FFCookiesComponent],
      providers: [{provide: FFCookiesService, useClass: ServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
