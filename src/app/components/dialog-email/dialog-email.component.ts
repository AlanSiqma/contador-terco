import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-email',
  templateUrl: './dialog-email.component.html',
  styleUrls: ['./dialog-email.component.scss']
})
export class DialogEmailComponent implements OnInit {

  public data: any = { email: '' };

  constructor(
    public dialogRef: MatDialogRef<DialogEmailComponent>

  ) { }

  ngOnInit(): void {

  }
  onNoClick(): void {
    if (this.data.email != '') {
      this.dialogRef.close(this.data);
    }
  }
}