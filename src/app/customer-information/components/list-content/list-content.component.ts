import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../shared/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrl: './list-content.component.css'
})
export class ListContentComponent implements OnInit {
  customerList = [];

  constructor(private _customerService: CustomerService, private router: Router){}

  ngOnInit(): void {
    this._customerService.getAllCustomers().subscribe(data => {
      this.customerList = data;
      //this.listProductIsEmpty = this.productList.length === 0; 
    });
  }

  openDetailCustomer(customerID: string) {
    this.router.navigateByUrl("/list-customer/detail?id="+customerID)
  }

  editCustomer(customerID: string) {
    this.router.navigateByUrl("/form?action=update&id=" + customerID);
  }

  deleteCustomer(customerID: string) {
    this._customerService.deleteCustomer(customerID);
  }

}
