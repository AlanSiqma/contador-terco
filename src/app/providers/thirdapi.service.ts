import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ThirdapiService {
  clean() {
    this.arrayPray = [];
    this.allPray = [];
  }

  constructor(private http: HttpClient) { }

  arrayPray = [];
  allPray = []

  initilizeHeader() {
    const headers = new HttpHeaders({
      'Content-Type': `application/json`,
      'Accept': `*/*`,
      'Access-Control-Allow-Origin': `*`
    });
    return headers;
  };

  getIntention(intention: string) {

    let header = { headers: this.initilizeHeader() };

    var urlBackEnd = `${environment.urlBackEnd}${intention}`;

    return this.http.get(urlBackEnd, header)
      .subscribe(
        (data: any) => {
          if (!data.erro) {
            if (data.result[0] != undefined) {
              console.log(data.result)
              this.arrayPray = data.result[0].prayedRosaries;
            }
          }
        }, (error) => console.log(error));
  }

  get() {
    let header = { headers: this.initilizeHeader() };
    var urlBackEnd = `${environment.urlBackEnd}`;
    return this.http.get(urlBackEnd, header);
  }


  postPray(intention: string, body: any) {

    var pray = { email: body.email, data: body.data, status: body.status, numero: body.numero };

    let header = { headers: this.initilizeHeader() };

    var urlBackEnd = `${environment.urlBackEnd}${intention}`;

    return this.http.post(urlBackEnd, pray, header)
      .subscribe(
        (data: any) => {
          if (!data.erro) {
            this.getIntention(intention);
          }
        }, (error) => console.log(error));
  }
  postPrayintentionObject(intentionObject: any, body: any) {
    let header = { headers: this.initilizeHeader() };

    var urlBackEnd = `${environment.urlBackEndnewthirdIntention}${intentionObject.descriptionIntention}`;

    return this.http.post(urlBackEnd, intentionObject, header)
      .subscribe(
        (data: any) => {
          if (!data.erro) {
            // console.log('sucesso')
          }
        }, (error) => console.log(error));
  }
}
