import { TestBed } from '@angular/core/testing';

import { FakeformateurserviceService } from './fakeformateurservice.service';

describe('FakeformateurserviceService', () => {
  let service: FakeformateurserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeformateurserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
