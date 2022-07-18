import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  intentionForm = this.formBuilder.group({
    intention: new FormControl('', [Validators.minLength(5), Validators.required])
  });


  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  nav(intention: string) {
    if (intention != '') {
      var endpoint = `/third-campaign?intention=${intention}`;
      this.router.navigateByUrl(endpoint);
    }
  }
  onSubmit(): void {
    if (this.intentionForm.valid) {
      this.nav(this.intentionForm.value.intention)
    }
  }
}
