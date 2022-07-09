import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ThirdapiService } from 'src/app/providers/thirdapi.service';

@Injectable({
  providedIn: 'root'
})
export class ThirdService {

  public standardDates: any = []

  private setStandardDates(countCard: number) {
    for (var i = 0; i < countCard; i++) {
      var standardDate: any = { numero: i + 1, status: false };
      this.standardDates.push(standardDate);
    }
  }

  constructor(public thirdapiService: ThirdapiService) {
    var countCard = 10;
    this.setStandardDates(countCard);
  }

  getIntention(intention: string) {
    this.thirdapiService.getIntention(intention);
  }

  myArrayPray(email: string) {
    return _.filter(this.thirdapiService.arrayPray, { email: email });
  }

  get totalStatusTrue() {
    return _.filter(this.thirdapiService.arrayPray, { status: true });
  }

  postPray(intention: string, item: any) {
    this.thirdapiService.postPray(intention, item);
  }

  days(email: string) {

    const mapArrayPray = _.map(this.myArrayPray(email), 'numero');
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

    this.myArrayPray(email).forEach((item: any) => {
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
