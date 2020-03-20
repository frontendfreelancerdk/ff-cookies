import {TestBed} from '@angular/core/testing';

import {FFCookiesService} from './ff-cookies.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('FFCookiesService', () => {
  let service: FFCookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [RouterTestingModule]});
    service = TestBed.inject(FFCookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
