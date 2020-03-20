import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {FFCookiesAdvancedComponent} from './ff-cookies-advanced.component';
import {FFCookiesService} from '../ff-cookies.service';
import {FFTabComponent} from './ff-tabs/ff-tab/ff-tab.component';
import {FFTabsComponent} from './ff-tabs/ff-tabs.component';
import {FFCookiesTableComponent} from './ff-cookies-table/ff-cookies-table.component';

class ServiceStub {
  isBrowser = true;

  setCookies() {
  }

  getCookies() {
  }

  navigate() {
  }
}

const fakeCookiesSet = {
  groups: [
    {
      id: 0,
      name: 'Necessary',
      required: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorem eveniet fugiat magnam.',
      titles: {
        name: 'Name',
        provider: 'Provider',
        purpose: 'Purpose',
        expiry: 'Expiry',
        dataProcessor: 'Data Processor',
        dataProcessorPrivacyPolicy: 'Data Processor Privacy Policy',
        type: 'Type'
      },
      cookies: [
        {
          name: 'some name',
          provider: 'some provider',
          purpose: 'some Purpose',
          expiry: 'some expiry',
          dataProcessor: 'dataProcessor',
          dataProcessorPrivacyPolicy: 'Data Processor Privacy Policy',
          type: 'some type'
        }
      ]
    },
    {
      id: 1,
      name: 'Statistic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorem eveniet fugiat magnam.',
      titles: {
        name: 'Name',
        provider: 'Provider',
        purpose: 'Purpose',
        expiry: 'Expiry',
        dataProcessor: 'Data Processor',
        dataProcessorPrivacyPolicy: 'Data Processor Privacy Policy',
        type: 'Type'
      },
      cookies: [
        {
          name: 'some name',
          provider: 'some provider',
          purpose: 'some Purpose',
          expiry: 'some expiry',
          dataProcessor: 'dataProcessor',
          dataProcessorPrivacyPolicy: 'Data Processor Privacy Policy',
          type: 'some type'
        }
      ]
    },
    {
      id: 2,
      name: 'Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorem eveniet fugiat magnam.',
      titles: {
        name: 'Name',
        provider: 'Provider',
        purpose: 'Purpose',
        expiry: 'Expiry',
        dataProcessor: 'Data Processor',
        dataProcessorPrivacyPolicy: 'Data Processor Privacy Policy',
        type: 'Type'
      },
      cookies: [
        {
          name: 'some name',
          provider: 'some provider',
          purpose: 'some Purpose',
          expiry: 'some expiry',
          dataProcessor: 'dataProcessor',
          dataProcessorPrivacyPolicy: 'Data Processor Privacy Policy',
          type: 'some type'
        }
      ]
    }
  ]
};

describe('FFCookiesAdvancedComponent', () => {
  let component: FFCookiesAdvancedComponent;
  let fixture: ComponentFixture<FFCookiesAdvancedComponent>;
  let service;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule],
      declarations: [FFCookiesAdvancedComponent, FFTabsComponent, FFTabComponent, FFCookiesTableComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: FFCookiesService, useClass: ServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFCookiesAdvancedComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(FFCookiesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set flag to true if platform isn\'t browser', () => {
    service.isBrowser = false;
    component.ngOnInit();
    expect(component.flag).toBeTruthy();
  });

  it('get cookies have been called at init', () => {
    const spy = spyOn(service, 'getCookies');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should use custom getCookies method if it exists at init', () => {
    component.checkCookies = () => true;
    const spy = spyOn(component, 'checkCookies');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should set cookie after user accept', () => {
    const spy = spyOn(service, 'setCookies');
    component.cookiesAccept();
    expect(spy).toHaveBeenCalled();
  });

  it('should use custom setCookies method if it exists after user accept', () => {
    component.setCookies = () => true;
    const spy = spyOn(component, 'setCookies');
    component.cookiesAccept();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit accepted with all groups IDs', () => {
    let result = null;
    component.cookiesSet = fakeCookiesSet;
    component.accepted.subscribe(v => result = v);
    component.cookiesAccept();
    expect(result).toEqual([0, 1, 2]);
  });

  it('should emit accepted with selected groups IDs', () => {
    let result = null;
    component.cookiesSet = fakeCookiesSet;
    component.accepted.subscribe(v => result = v);
    component.selectedCookiesGroups = new Set();
    fixture.detectChanges();
    component.selectedHandler(true, 0);
    component.selectedHandler(true, 1);
    component.selectedHandler(false, 0);
    component.cookiesChecked();
    fixture.detectChanges();
    expect(result).toEqual([1]);
  });

  it('should change animation state by toggle() method', () => {
    expect(component.animationState).toBe('closed');
    component.toggle();
    expect(component.animationState).toBe('open');
    component.toggle();
    expect(component.animationState).toBe('closed');
  });
});
