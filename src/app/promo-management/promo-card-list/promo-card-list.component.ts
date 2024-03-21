import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PromoService } from '../promo.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailPromoComponent } from '../detail-promo/detail-promo.component';

@Component({
  selector: 'app-promo-card-list',
  templateUrl: './promo-card-list.component.html',
  styleUrls: ['./promo-card-list.component.scss']
})
export class PromoCardListComponent implements OnInit, OnChanges {
  @Input() addNewPromo: boolean = false;
  allPromo: any;

  constructor(private _promo: PromoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.addNewPromo);
    this._promo.getAllPromo().subscribe( (response: any) => {
      this.allPromo = response.data.GetAllPromos;
      console.log(this.allPromo);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
      if(this.addNewPromo == true) {
        this._promo.getAllPromo().subscribe( (response: any) => {
          this.allPromo = response.data.GetAllPromos;
          console.log(this.allPromo);
        })
      }
  }

  openDetail(id: string) {
    this.dialog.open(DetailPromoComponent, {
        disableClose: true,
        width : "500 px",
        data : {
          id : id
        }
      });
  }

}