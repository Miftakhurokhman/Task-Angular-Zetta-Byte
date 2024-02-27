import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GuitarService } from '../../../shared/guitar.service';

@Component({
  selector: 'app-list-guitar',
  templateUrl: './list-guitar.component.html',
  styleUrl: './list-guitar.component.css'
})
export class ListGuitarComponent implements OnInit{
  @Output() choosingCard = new EventEmitter<(number)>();
  @Output() likedGuitar = new EventEmitter<(boolean)>();
  public guitarList: any =[];

  constructor(private _guitarService: GuitarService) {}
  
  ngOnInit(): void {
      this._guitarService.getGuitars().subscribe(data => {
      this.guitarList = data;
    });
  }

  getChoosedCard(index: number) {
    this.choosingCard.emit(index);
  }

  likeGuitar(index:number) {
    console.log("tes", index)
    this._guitarService.updateLikeStatus(index);
  }
}
