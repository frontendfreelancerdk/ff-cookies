import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {FfCookiesComponent} from './ff-cookies.component';
import {DebugElement, ElementRef} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('FfCookiesComponent', () => {
  let component: FfCookiesComponent;
  let fixture: ComponentFixture<FfCookiesComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FfCookiesComponent]
    })
      .compileComponents();
    document.cookie = `ff-cookies=0; 1`;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfCookiesComponent);
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
