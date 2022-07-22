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

  public searchIntention: string = '';

  private allPray: any = [];
  public prayFilter: any = [];

  constructor(private thirdService: ThirdService, private router: Router) {
    this.thirdService.get().subscribe(
      (data: any) => {
        if (!data.erro) {
          if (data.result != undefined) {
            this.allPray = _.map(data.result, 'descriptionIntention');
            this.prayFilter = this.allPray;
          }
        }
      }, (error) => console.log(error));;
  }

  ngOnInit(): void {
  }

  search() {
    var intention = this.searchIntention;

    this.prayFilter = _.filter(this.allPray, function (item) {
      return item?.includes(intention)
    });
  }


  navigatePage(intention: string) {
    this.router.navigate([`/?intention=${intention}`])
  }
}
