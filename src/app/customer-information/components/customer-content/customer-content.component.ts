import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../shared/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-content',
  templateUrl: './customer-content.component.html',
  styleUrl: './customer-content.component.css'
})
export class CustomerContentComponent implements OnInit {

  detailCustomerInformation: any;
  constructor(private _customerService: CustomerService, private activatedRoute: ActivatedRoute, private router:Router) {  }

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params => {
        this._customerService.getCustomer(params['id']).subscribe( data => { 
          this.detailCustomerInformation = data;
          console.log(this.detailCustomerInformation);
        }
      );
      })
  }

  editCustomerInformation() {
    this.router.navigateByUrl("/form?action=update&id="+ this.detailCustomerInformation.id);
  }

  deleteCustomer() {
    this._customerService.deleteCustomer(this.detailCustomerInformation.id);
    this.router.navigateByUrl("/list-customer")
  }
}
