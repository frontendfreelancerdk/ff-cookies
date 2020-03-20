import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FFCookiesModalComponent} from './ff-cookies-modal.component';
import {FFCookiesService} from '../ff-cookies.service';
import {ReactiveFormsModule} from '@angular/forms';


class ServiceStub {
  isBrowser = true;

  setCookies() {
  }

  getCookies() {
  }

  navigate() {
  }
}

describe('FFCookiesModalComponent', () => {
  let component: FFCookiesModalComponent;
  let fixture: ComponentFixture<FFCookiesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FFCookiesModalComponent],
      providers: [{provide: FFCookiesService, useClass: ServiceStub}]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFCookiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
