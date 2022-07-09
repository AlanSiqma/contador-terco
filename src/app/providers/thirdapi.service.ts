import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ThirdapiService {

  constructor(private http: HttpClient) { }

  arrayPray = [];

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
            this.arrayPray = data.result[0].prayedRosaries;
          }
        }, (error) => console.log(error));
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
}
