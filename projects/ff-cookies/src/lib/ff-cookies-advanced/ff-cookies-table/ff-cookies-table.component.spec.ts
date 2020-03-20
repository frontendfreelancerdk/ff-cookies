import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FFCookiesTableComponent} from './ff-cookies-table.component';

describe('FFCookiesTableComponent', () => {
  let component: FFCookiesTableComponent;
  let fixture: ComponentFixture<FFCookiesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FFCookiesTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFCookiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
