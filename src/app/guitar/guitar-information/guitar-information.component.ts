import { Component, OnInit } from '@angular/core';
import { GuitarService } from '../../shared/guitar.service';

@Component({
  selector: 'app-guitar-information',
  templateUrl: './guitar-information.component.html',
  styleUrls: ['./guitar-information.component.css'],
})
export class GuitarInformationComponent implements OnInit {
  public guitarList: any[] = [];
  public choosedGuitar: any;
  public displayAlert: boolean = false;

  constructor(private _guitarService: GuitarService) {}

  ngOnInit(): void {
    this._guitarService.getGuitar().subscribe(data => {
      this.choosedGuitar = data;
    });
    this._guitarService.getGuitars().subscribe(data => {
      this.guitarList = data;
    });
  }

  SetDetailCard(index: number) {
    this.choosedGuitar = this.guitarList[index];
    this.displayAlert = true;
    setTimeout(() => {
      this.displayAlert = false;
    }, 1500);
  }  
}
