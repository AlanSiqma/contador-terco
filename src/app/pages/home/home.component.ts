import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
import { ThirdService } from 'src/app/services/third.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public intention = 'teste4';
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

  constructor(private datePipe: DatePipe, public thirdService: ThirdService) {
    this.thirdService.getIntention(this.intention);
  }

  ngOnInit(): void {
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
