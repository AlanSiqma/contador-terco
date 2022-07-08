import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  get isNavbarCollapsed() {
    return false; //this.service.isNavbarCollapsed;
  }
  get user() {
    return "siqumai";//this.service.user;
  }
  get loggedIn() {
    return "siqumai";//this.service.loggedIn;
  }
  signOut() {

  }
  ngOnInit() {
  }

}
