import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar, MatBottomSheet } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { CampaignObject } from 'src/app/classes/campaign/campaign.model';
import { GeneratorTextComponent } from './generator-text.component';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-mobile-modal',
  templateUrl: './mobile-modal.component.html',
  styleUrls: ['./mobile-modal.component.css']
})
export class MobileModalComponent implements OnInit {
  public emailDef: string = '';
  public textConsult: string = '';
  public campaignType: string = 'Ads mobile';
constructor(public dialogRef: MatDialogRef<MobileModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: string,
  @Inject(DOCUMENT) private document: Document,
  private bottomSheet: MatBottomSheet,
  private dialog: MatDialog, private _matSnack: MatSnackBar) {
    if (data && data !== '') {
      this.emailDef = data;
      return;
    }
  }

ngOnInit() {
}
closeModal() {
  setTimeout(() => {
    this.dialogRef.close();
  }, 100);
}
generateTextSheet() {
  const defaultTextComponent = this.bottomSheet.open(GeneratorTextComponent);
  defaultTextComponent.afterDismissed().subscribe(
    (textGenerated) => {
      if (textGenerated) {
        this.textConsult = textGenerated;
      }
    }
  );
}
sendCampaignMarketing(CampaignTicket: NgForm): void {
  if (CampaignTicket.invalid) {
    throw new Error('The form is invalid');
  }
  const ObjectCampaign: CampaignObject = new CampaignObject(CampaignTicket.value.name,
    CampaignTicket.value.email, CampaignTicket.value.message, CampaignTicket.value.campaign_type);
  const loader = this.dialog.open(LoaderComponent, {
    data: ObjectCampaign,
    disableClose: true
  });
  loader.afterClosed().subscribe(
    (campaignAfiliated: boolean): void => {
      if ((campaignAfiliated)) {
         this._matSnack.open('Thanks for trusting us, we will be in touch with you soon', null, {
           duration: 5000,
           panelClass: ['success-snackbar']
         });
         CampaignTicket.reset();
         this.dialogRef.close();
      } else {
        this._matSnack.open('Failure to process your operation, please try again later', null, {
          duration: 5000,
          panelClass: ['red-snackbar']
        });
        CampaignTicket.reset();
        this.dialogRef.close();
      }
    }
  );
}
}
