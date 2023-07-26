import { TestBed } from '@angular/core/testing';

import { SharedCityService } from './shared-city.service';

describe('SharedCityService', () => {
  let service: SharedCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
