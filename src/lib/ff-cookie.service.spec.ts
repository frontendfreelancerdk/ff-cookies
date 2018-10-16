import { TestBed } from '@angular/core/testing';

import { FfCookieService } from './ff-cookie.service';

describe('FfCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FfCookieService = TestBed.get(FfCookieService);
    expect(service).toBeTruthy();
  });
});
