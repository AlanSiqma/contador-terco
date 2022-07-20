import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCampaignComponent } from './new-campaign.component';

describe('NewCampaignComponent', () => {
  let component: NewCampaignComponent;
  let fixture: ComponentFixture<NewCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
