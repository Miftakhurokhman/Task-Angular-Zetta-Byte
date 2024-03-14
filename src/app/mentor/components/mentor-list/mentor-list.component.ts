import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MentorService } from '../../../shared/mentor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements AfterViewInit, OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'userType', 'email', 'status', 'action'];
  mentorData!: any[];
  currentFilterType: string = 'name';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient, private _mentorService: MentorService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
      console.log("tes")
      
  }

  ngAfterViewInit() {
    console.log('halo')
    this._mentorService.getAllMentor().subscribe(data => {
          this.mentorData = data;
          this.dataSource = new MatTableDataSource<any>(this.mentorData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.cdr.detectChanges();
        })
  }

  selectFilterType(event: any) {
    this.currentFilterType = event.value;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    
    switch (this.currentFilterType) {
      case 'name':
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          let fullName = `${data.civility.toLowerCase()} ${data.last_name.toLowerCase()} ${data.first_name.toLowerCase()}`
          return data.civility.toLowerCase().includes(filter) || 
                 data.first_name.toLowerCase().includes(filter) ||
                 data.last_name.toLowerCase().includes(filter) ||
                 fullName.includes(filter);
        };
        break;
      case 'userType':
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          return data.company.user_type.toLowerCase().includes(filter);
        };
        break;
      case 'email':
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          return data.email.toLowerCase().includes(filter);
        };
        break;
      default:
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          return data.user_status.toLowerCase().includes(filter);
        };
        break;
    }
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openPage(id: string) {
    this.router.navigate(['/form'], {queryParams:{action: "update", id: id}})
  }

  applyStatusFilter(status: string) {
    this.dataSource.filter = status.trim().toLowerCase();
  }

  getStatusIcon(status: string): string {
    return status === 'active' ? 'check' : 'close';
  }
}
