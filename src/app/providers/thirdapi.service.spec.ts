import { TestBed } from '@angular/core/testing';

import { ThirdapiService } from './thirdapi.service';

describe('ThirdapiService', () => {
  let service: ThirdapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
