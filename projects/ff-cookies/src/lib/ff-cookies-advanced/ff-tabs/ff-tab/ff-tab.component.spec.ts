import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FFTabComponent} from './ff-tab.component';

describe('FFTabComponent', () => {
  let component: FFTabComponent;
  let fixture: ComponentFixture<FFTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FFTabComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
