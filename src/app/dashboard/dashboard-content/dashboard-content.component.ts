import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})
export class DashboardContentComponent {

  constructor(private router:Router){}

  addNewCustomer () {
    this.router.navigateByUrl("/form?action=add");
  }

  viewListCustomer() {
    this.router.navigateByUrl("/list-customer");
  }
}
