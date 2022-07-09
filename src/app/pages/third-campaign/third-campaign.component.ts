import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
import { ThirdService } from 'src/app/services/third.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third-campaign',
  templateUrl: './third-campaign.component.html',
  styleUrls: ['./third-campaign.component.scss']
})
export class ThirdCampaignComponent implements OnInit {

  public intention = '';
  private formatDate: string = 'dd-MM-yyyy';
  private myEmail = 'alansiqma@gmail.com';

  get totalStatusTrueCount() {
    return this.totalStatusTrue.length;
  };

  get days() {
    return this.thirdService.days(this.myEmail);
  }

  get validate() {
    return this.myStatusTrueDiasCount === this.thirdService.standardDates.length;
  }

  get myStatusTrueDiasCount() {
    var myStatusTrueDays = _.filter(this.myArrayPray, { status: true })
    return myStatusTrueDays.length;
  }

  get totalStatusTrue() {
    return this.thirdService.totalStatusTrue;
  }

  get myArrayPray() {
    return this.thirdService.myArrayPray(this.myEmail);
  }

  constructor(
    private datePipe: DatePipe,
    private thirdService: ThirdService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {

        if (params != undefined) {

          var intention = params['intention']

          if (intention != undefined && intention != '') {
            this.intention = intention
            this.thirdService.getIntention(this.intention);
          } else {
            console.log('redirecionar');
          }
        } else {
          console.log('redirecionar');
        }
      })
      ;
  }

  changeStatus(item: any) {
    item.email = this.myEmail
    item.status = !item.status;
    item.data = this.datePipe.transform(new Date(), this.formatDate);
    this.thirdService.postPray(this.intention, item);
  }

  newCard(mutiplicador: number) {
    this.thirdService.newCard(mutiplicador);
  }

}
