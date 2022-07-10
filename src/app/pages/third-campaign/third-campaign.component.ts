import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
import { ThirdService } from 'src/app/services/third.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogEmailComponent } from 'src/app/components/dialog-email/dialog-email.component';
@Component({
  selector: 'app-third-campaign',
  templateUrl: './third-campaign.component.html',
  styleUrls: ['./third-campaign.component.scss']
})
export class ThirdCampaignComponent implements OnInit {

  public intention = '';
  private formatDate: string = 'dd-MM-yyyy';
  public myEmail = '';

  get totalStatusTrueCount() {
    return this.totalStatusTrue.length;
  };

  get days() {
    return this.thirdService.days;
  }

  get validate() {
    return this.myStatusTrueDiasCount === this.thirdService.standardDates.length;
  }

  get myStatusTrueDiasCount() {
    var myStatusTrueDays = _.filter(this.myArrayPray, { status: true })
    return myStatusTrueDays.length;
  }

  get totalStatusTrue() {
    return this.thirdService.totalStatusTrue;
  }

  get myArrayPray() {
    return this.thirdService.myArrayPray;
  }

  constructor(
    private datePipe: DatePipe,
    private thirdService: ThirdService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) {

    this.thirdService.clean();
  }

  ngOnInit(): void {
    this.validateQueryParams();
  }

  validateQueryParams() {
    this.route.queryParams
      .subscribe(params => {
        var intention = params['intention'];
        if (intention != undefined && intention != '') {
          this.intention = intention;
          this.getEmail();
        } else {
          this.initialPage();
        }
      });
  }
  getEmail() {
    this.openDialogEmail();
  }
  openDialogEmail() {
    const dialogRef = this.dialog.open(DialogEmailComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.email != undefined) {
        this.myEmail = result.email;
        this.thirdService.getIntention(this.intention, this.myEmail);
      } else {
        this.initialPage();
      }
    });
  }

  initialPage() {
    this.router.navigate(['/'])
  }

  changeStatus(item: any) {
    item.email = this.myEmail
    item.status = !item.status;
    item.data = this.datePipe.transform(new Date(), this.formatDate);
    this.thirdService.postPray(this.intention, item);
  }

  newCard(mutiplicador: number) {
    this.thirdService.newCard(mutiplicador);
  }

}
