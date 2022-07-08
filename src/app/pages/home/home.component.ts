import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tercosRezados = 0;
  public intencao = '.....';
  public datas = [
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

  totalStatusTrue = 0;
  totalUserStatusTrue = 0;

  get dias() {
    return this.datas;
  }
  get statusTrueDias() {
    return _.filter(this.dias, { status: true }).length;
  }

  get validate() {
    return this.statusTrueDias === this.dias.length;
  }


  constructor(private datePipe: DatePipe) {
  }

  ngOnInit(): void {
  }

  changeStatus(item: any) {
    item.status = !item.status;
    item.data = this.datePipe.transform(new Date(), 'dd-MM-yyyy');

  }

  novaCartela(mutiplicador: number) {
    console.log('teste')
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
