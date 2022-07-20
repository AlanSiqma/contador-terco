import { TestBed } from '@angular/core/testing';

import { ThirdCampaignService } from './third-campaign.service';

describe('ThirdCampaignService', () => {
  let service: ThirdCampaignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdCampaignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
