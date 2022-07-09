import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { environment } from '../../../environments/environment'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public intention: string = '';

  get url() {
    var endpoint = environment.myUrl;
    return `${endpoint}${this.intention}`;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
