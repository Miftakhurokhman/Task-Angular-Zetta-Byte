import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPromoFormComponent } from './add-promo-form/add-promo-form.component';

@Component({
  selector: 'app-promo-management',
  templateUrl: './promo-management.component.html',
  styleUrls: ['./promo-management.component.scss']
})
export class PromoManagementComponent implements OnInit {
  addNewPromo: boolean = false
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPromoFormComponent, {
      disableClose: true,
      data : {
        name: 'add',
        id : ""
      },
    }).afterClosed().subscribe( (result) => {
      console.log(result)
      if (result === "success") {
        this.addNewPromo = true
      }
    })
  }

}
