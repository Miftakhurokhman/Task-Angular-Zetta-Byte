import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../../../shared/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrl: './list-player.component.css'
})
export class ListPlayerComponent implements OnInit {
  ListPlayer: any;
  @Input() playerPosition: any;

  constructor(private _teamService:TeamService, private router:Router){}

  ngOnInit(): void {
      if (this.playerPosition == null) {
        this._teamService.getAllPlayers().subscribe(data => {
          this.ListPlayer = data;
        })
      } else {
        this._teamService.getPlayerBasedOnPosition(this.playerPosition).subscribe(data => {
          this.ListPlayer = data;
        })
      }
  }

  editPlayer(ID: string) {
    this.router.navigate(['/form'], {queryParams: {action: 'update', id : ID}})
  }

  detailPlayer(ID: string){
    this.router.navigate(['/list-player', 'player'], {queryParams: {id: ID}})
  }
}
