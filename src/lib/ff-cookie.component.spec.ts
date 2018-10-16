import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfCookieComponent } from './ff-cookie.component';

describe('FfCookieComponent', () => {
  let component: FfCookieComponent;
  let fixture: ComponentFixture<FfCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfCookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
