import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {FFCookiesComponent} from './ff-cookies.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('FfCookiesComponent', () => {
  let component: FFCookiesComponent;
  let fixture: ComponentFixture<FFCookiesComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FFCookiesComponent]
    })
      .compileComponents();
    document.cookie = `ff-cookies=0; 1`;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFCookiesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be false', () => {
    expect(component.flag).toBeFalsy();
  });
  it('should call cookiesAccept method after click the button', () => {
    spyOn(component, 'cookiesAccept');
    const button = de.query(By.css('button')).nativeElement;
    button.click();
    expect(component.cookiesAccept).toHaveBeenCalled();
  });
  it('should be true', () => {
    component.cookiesAccept();
    expect(component.flag).toBeTruthy();
  });
});
