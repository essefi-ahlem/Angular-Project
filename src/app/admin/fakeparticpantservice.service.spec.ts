import { TestBed } from '@angular/core/testing';

import { FakeparticpantserviceService } from './fakeparticpantservice.service';

describe('FakeparticpantserviceService', () => {
  let service: FakeparticpantserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeparticpantserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
