import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCampaignComponent } from './third-campaign.component';

describe('ThirdCampaignComponent', () => {
  let component: ThirdCampaignComponent;
  let fixture: ComponentFixture<ThirdCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
