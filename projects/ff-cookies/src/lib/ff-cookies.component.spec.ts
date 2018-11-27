import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FfCookiesComponent } from './ff-cookies.component';

describe('FfCookiesComponent', () => {
  let component: FfCookiesComponent;
  let fixture: ComponentFixture<FfCookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ FfCookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be true', () => {
    component.cookiesAccept();
    expect(component.flag).toBeTruthy();
  });
});
