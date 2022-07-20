import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdCampaignComponent } from './pages/third-campaign/third-campaign.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component'
import { NewCampaignComponent } from './pages/new-campaign/new-campaign.component'

const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent,
  },
  {
    path: 'third-campaign',
    component: ThirdCampaignComponent
  }
  ,
  {
    path: 'campaigns',
    component: CampaignsComponent
  }
  ,
  {
    path: 'new-campaign',
    component: NewCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
