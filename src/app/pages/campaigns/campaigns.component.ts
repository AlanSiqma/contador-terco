import { Component, OnInit } from '@angular/core';
import { ThirdService } from 'src/app/services/third.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  get allPray() {
    return _.map(this.thirdService.allPray, 'descriptionIntention');
  }

  constructor(private thirdService: ThirdService, private router: Router) {
    this.thirdService.get();
  }

  ngOnInit(): void {
  }

  navigatePage(intention: string) {
    this.router.navigate([`/?intention=${intention}`])
  }
}
