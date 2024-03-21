import { Component, Inject, OnInit } from '@angular/core';
import { PromoService } from '../promo.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddPromoFormComponent } from '../add-promo-form/add-promo-form.component';

@Component({
  selector: 'app-detail-promo',
  templateUrl: './detail-promo.component.html',
  styleUrls: ['./detail-promo.component.css']
})
export class DetailPromoComponent implements OnInit {
  id:string = ""
  detailPromo = {
    title: "",
    sub_title: "",
    description: "",
    ref: ""
  };
  constructor(
    private promoService: PromoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.id = this.data.id;
    this.promoService.getOnePromo(this.id).subscribe((Response:any) => {
      this.detailPromo = Response.data.GetOnePromo;
    })
  }

  openEdit() {
    this.dialogRef.closeAll()
    this.dialogRef.open(AddPromoFormComponent, {
      disableClose : true,
      data : {
        name: "update",
        id: this.id
      }
    })
  }

}
