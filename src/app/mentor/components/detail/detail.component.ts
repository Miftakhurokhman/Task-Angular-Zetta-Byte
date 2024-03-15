import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MentorService } from '../../../shared/mentor.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  detailUser: any;

  constructor(private _mentorService: MentorService, @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
      this._mentorService.getMentor(this.data.id).subscribe(data => {
        this.detailUser = data;
      })
      console.log(this.detailUser)
  }

}
