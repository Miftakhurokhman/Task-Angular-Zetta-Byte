import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../../shared/team.service';

@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.component.html',
  styleUrl: './detail-player.component.css'
})
export class DetailPlayerComponent implements OnInit {
  playerInformation: any;

  constructor(private activatedRoute: ActivatedRoute, private _teamService:TeamService, private router: Router) {}

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params => {
        this._teamService.getPlayer(params['id']).subscribe(data => {
          this.playerInformation = data;
        })
      })
  }

  editPlayer() {
    this.router.navigate(['/form'], {queryParams:{action: 'update', id: this.playerInformation.id}})
  }
}
