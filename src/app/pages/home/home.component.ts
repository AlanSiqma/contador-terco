import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public intention: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  nav() {
    if (this.intention != '') {
      var endpoint = `/third-campaign?intention=${this.intention}`;
      this.router.navigateByUrl(endpoint);
    }
  }
}
