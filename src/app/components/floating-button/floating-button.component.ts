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
    var urlWhats = "https://api.whatsapp.com/send?text=Olá, me ajude nessa campanha do rozario:\n ";
    var fromartHref = encodeURIComponent(window.location.href);
    var url = `${urlWhats}${fromartHref}`;
    console.log(url)
    window.open(url, '_blank', 'noopener');
  }

}
