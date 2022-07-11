import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss']
})
export class FloatingButtonComponent implements OnInit {

  constructor(private router: Router, private Location: Location) {
  }

  ngOnInit(): void {
  }
  shareWhatsapp() {
    var urlWhats = 'https://wa.me/?text=';
    var url = `${urlWhats}${window.location.href}`;
    window.open(url, '_blank');
  }

}
