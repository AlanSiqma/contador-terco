import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ThirdapiService } from 'src/app/providers/thirdapi.service';

@Injectable({
  providedIn: 'root'
})
export class ThirdCampaignService {


  private email = ''
  public standardDates: any = []

  private setStandardDates(countCard: number) {
    for (var i = 0; i < countCard; i++) {
      var standardDate: any = { numero: i + 1, status: false };
      this.standardDates.push(standardDate);
    }
  }
  clean() {

    this.thirdapiService.clean();

    this.standardDates = [];
    var countCard = 10;
    this.setStandardDates(countCard);
  }
  constructor(public thirdapiService: ThirdapiService) {
    this.clean();
  }

  getIntention(intention: string, email: string) {
    this.email = email;
    this.thirdapiService.getIntention(intention);
  }

  get myArrayPray() {
    return _.filter(this.thirdapiService.arrayPray, { email: this.email });
  }

  get totalStatusTrue() {
    return _.filter(this.thirdapiService.arrayPray, { status: true });
  }

  postPray(intention: string, item: any) {
    this.thirdapiService.postPray(intention, item);
  }
  postPrayintentionObject(intentionObject: any, item: any) {
    this.thirdapiService.postPrayintentionObject(intentionObject, item);
  }

  get days() {

    const mapArrayPray = _.map(this.myArrayPray, 'numero');
    const maxArrayPray = _.maxBy(mapArrayPray);

    const mapDatasPadrao = _.map(this.standardDates, 'numero');
    const maxDatasPadrao = _.maxBy(mapDatasPadrao);

    if (
      maxDatasPadrao != undefined &&
      maxArrayPray != undefined &&
      maxDatasPadrao < maxArrayPray
    ) {
      this.newCard(this.rounndTen(maxArrayPray) - 1)
    }

    this.myArrayPray.forEach((item: any) => {
      var filter = _.filter(this.standardDates, { numero: item.numero });
      if (filter.length > 0) {
        filter[0].status = item.status;
      }
    })

    return this.standardDates;
  }

  newCard(mutiplicador: number) {
    let last: any = _.last(this.standardDates);
    if (last?.numero != null) {
      for (let i = 0; i < 10; i++) {
        let newDate = {
          numero: last?.numero + (i + 1),
          status: false
        }
        this.standardDates.push(newDate)
      }
    }
  }

  rounndTen(num: number) {
    return Math.ceil(num / 10);
  }
}
