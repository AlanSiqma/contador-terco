import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
import { DabaseService } from 'src/app/providers/dabase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tercosRezados = 0;
  public intencao = 'teste4';
  public datasPadrao = [
    { numero: 1, status: false },
    { numero: 2, status: false },
    { numero: 3, status: false },
    { numero: 4, status: false },
    { numero: 5, status: false },
    { numero: 6, status: false },
    { numero: 7, status: false },
    { numero: 8, status: false },
    { numero: 9, status: false },
    { numero: 10, status: false }
  ];

  get datas() {
    // const mapArrayPray = _.map(this.myArrayPray, 'numero');
    // const maxArrayPray = _.maxBy(mapArrayPray);

    // const mapDatasPadrao = _.map(this.datasPadrao, 'numero');
    // const maxDatasPadrao = _.maxBy(mapDatasPadrao);

    // if (maxDatasPadrao != undefined &&
    //   maxArrayPray != undefined &&
    //   maxDatasPadrao < maxArrayPray
    // ) {
    //   this.novaCartela(this.arredondaDezena(maxArrayPray) - 1)
    // }

    return this.datasPadrao;
  }

  get totalStatusTrueCount() {
    return this.totalStatusTrue.length;
  };


  arredondaDezena(num: number) {
    return Math.ceil(num / 10);
  }

  get dias() {

    const mapArrayPray = _.map(this.myArrayPray, 'numero');
    const maxArrayPray = _.maxBy(mapArrayPray);

    const mapDatasPadrao = _.map(this.datasPadrao, 'numero');
    const maxDatasPadrao = _.maxBy(mapDatasPadrao);

    if (maxDatasPadrao != undefined &&
      maxArrayPray != undefined &&
      maxDatasPadrao < maxArrayPray
    ) {
      this.novaCartela(this.arredondaDezena(maxArrayPray) - 1)
    }

    this.myArrayPray.forEach((item: any) => {
      var filter = _.filter(this.datas, { numero: item.numero });
      if (filter.length > 0) {
        filter[0].status = item.status;
      }
    })

    return this.datas;
  }

  get validate() {
    return this.myStatusTrueDiasCount === this.datas.length;
  }

  get myStatusTrueDiasCount() {
    return this.myStatusTrueDias.length;
  }

  get myStatusTrueDias() {
    return _.filter(this.myArrayPray, { status: true });
  }

  get totalStatusTrue() {
    return _.filter(this.database.arrayPray, { status: true });
  }

  get myArrayPray() {
    return _.filter(this.database.arrayPray, { email: 'alansiqma@gmail.com' });
  }

  constructor(private datePipe: DatePipe, public database: DabaseService) {
    this.database.getIntention(this.intencao);
  }

  ngOnInit(): void {

  }

  changeStatus(item: any) {
    item.email = 'alansiqma@gmail.com'
    item.status = !item.status;
    item.data = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    this.database.postPray(this.intencao, item);
  }

  novaCartela(mutiplicador: number) {

    let last = _.last(this.datas);
    if (last?.numero != null) {
      for (let i = 0; i < 10; i++) {
        let novadata = {
          numero: last?.numero + (i + 1),
          status: false
        }
        this.datas.push(novadata)
      }
    }
  }
}
