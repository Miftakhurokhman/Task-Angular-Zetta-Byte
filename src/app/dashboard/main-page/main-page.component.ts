import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeamService } from '../../shared/team.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit, OnDestroy {
  search: string ="";
  bannerImage: string = ""

  constructor(private _teamService: TeamService){}

  ngOnInit(): void {
    this._teamService.getSearch().subscribe(data => {
      this.search = data;
    })
      this.bannerImage = "https://images.tokopedia.net/img/KRMmCm/2023/6/17/698ffe92-ddbd-4ab3-a38b-78a54a8dde4d.jpg"
  }

  ngOnDestroy(): void {
      this.bannerImage=""
  }

  searchPlayer(){
    this._teamService.updateSearch(this.search);
  }
}
