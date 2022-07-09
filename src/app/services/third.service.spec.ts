import { TestBed } from '@angular/core/testing';

import { ThirdService } from './third.service';

describe('ThirdService', () => {
  let service: ThirdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
