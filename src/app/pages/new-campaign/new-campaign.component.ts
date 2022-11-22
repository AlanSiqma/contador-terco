import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogEmailComponent } from 'src/app/components/dialog-email/dialog-email.component';
import { ThirdCampaignService } from 'src/app/services/third-campaign.service';
@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss']
})
export class NewCampaignComponent implements OnInit {

  public myEmail = '';

  intentionForm = this.formBuilder.group({
    intention: new FormControl('', [Validators.minLength(5), Validators.required])
  });


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private thirdService: ThirdCampaignService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  nav(intention: string) {

    if (this.myEmail == '') {
      this.getEmail();
    }
    else if (intention != '') {
      let intentionObject = {
        description: intention,
        userCreated: this.myEmail
      }
      this.thirdService.postPrayintentionObject(intentionObject, null);

      var endpoint = `/third-campaign?intention=${intention}`;
      this.router.navigateByUrl(endpoint);
    }
  }
  onSubmit(): void {
    if (this.intentionForm.valid) {
      this.nav(this.intentionForm.value.intention)
    }
  }

  getEmail() {
    var user = localStorage.getItem('user');
    if (user != null) {
      this.myEmail = user;
    } else {
      this.openDialogEmail();
    }
  }

  openDialogEmail() {
    const dialogRef = this.dialog.open(DialogEmailComponent, {
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.email != undefined) {
        this.myEmail = result.email;
        localStorage.setItem('user', this.myEmail);
      }
    });
  }
}
