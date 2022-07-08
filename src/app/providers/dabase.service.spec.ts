import { TestBed } from '@angular/core/testing';

import { DabaseService } from './dabase.service';

describe('DabaseService', () => {
  let service: DabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
