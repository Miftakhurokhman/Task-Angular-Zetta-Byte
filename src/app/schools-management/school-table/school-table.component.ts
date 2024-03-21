import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school-table',
  templateUrl: './school-table.component.html',
  styleUrls: ['./school-table.component.scss']
})
export class SchoolTableComponent implements OnInit {
  displayedColumns: string[] = ['short_name', 'long_name', 'status'];
  dataSource: any;

  constructor(private _schoolService: SchoolService) { }

  ngOnInit(): void {
    this._schoolService.getAllSchools().subscribe((response: any) => {
      this.dataSource = response.data.GetAllSchools;
    });
  }
}
