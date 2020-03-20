import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FFTabsComponent} from './ff-tabs.component';

describe('FFTabsComponent', () => {
  let component: FFTabsComponent;
  let fixture: ComponentFixture<FFTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FFTabsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
