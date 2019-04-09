import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {FFCookiesComponent} from './ff-cookies.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

describe('FfCookiesComponent', () => {
  let component: FFCookiesComponent;
  let fixture: ComponentFixture<FFCookiesComponent>;
  let de: DebugElement;
  const routerStub = {
    navigate: jasmine.createSpy('navigate'),
    events: new BehaviorSubject({})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FFCookiesComponent],
      providers: [{
        provide: Router,
        useValue: routerStub
      }]
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
  it('external', async(() => {
    component.link = 'https://medium.com';
    fixture.detectChanges();
    const link = fixture.debugElement.nativeElement.querySelector('a');
    link.click();

    fixture.whenStable().then(() => {
      expect(routerStub.navigate).toHaveBeenCalledTimes(0);
    });
  }));

  it('inner', async(() => {
    component.link = 'test';
    fixture.detectChanges();
    const link = fixture.debugElement.nativeElement.querySelector('a');
    link.click();

    fixture.whenStable().then(() => {
      expect(routerStub.navigate).toHaveBeenCalledWith(['/test']);
    });
  }));

  it('anchor', async(() => {
    component.link = '#test';
    fixture.detectChanges();
    const link = fixture.debugElement.nativeElement.querySelector('a');
    link.click();

    fixture.whenStable().then(() => {
      expect(routerStub.navigate).toHaveBeenCalledWith(['', 'context.html'], {fragment: 'test'});
    });
  }));
});
