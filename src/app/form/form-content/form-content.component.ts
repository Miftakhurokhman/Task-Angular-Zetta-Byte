import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../shared/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.css']
})
export class FormContentComponent implements OnInit, OnDestroy {
  reactiveForm: FormGroup;
  customerInformation: any;
  openMainForm : boolean = true;
  action = {
    name: "",
    id: "",
  }

  constructor(
    private _customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.action.name = params["action"];
      if (this.action.name == "update") {
        this.action.id = params["id"];
        this._customerService.getCustomer(this.action.id).subscribe(data => {
          this.customerInformation = data;
        })
        this.buildForm();
      } else {
        this.buildForm();
      }
    });
  }

  ngOnDestroy(): void {
    this.customerInformation = "";
    this.action = {
      name: "",
      id: "",
    }
  }

  buildForm() {
    if (this.action.name == "add") {
      //console.log(this.action.name)
      this.reactiveForm = new FormGroup({
        'id': new FormControl(null),
        'name': new FormControl(null, [Validators.required]),
        'birthPlace': new FormControl(null, [Validators.required]),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'gender' : new FormControl(null, [Validators.required]),
        'dateOfBirth': new FormControl(null, Validators.required),
        'profileImage': new FormControl(null, [Validators.required]),
        'motherName': new FormControl(null, [Validators.required]),
        'addresses' : new FormArray([
            new FormGroup({
            'fullAddress': new FormControl(null, [Validators.required]),
            'country': new FormControl(null, [Validators.required]),
            'city': new FormControl(null, [Validators.required]),
            'zipCode': new FormControl(null, [Validators.required])
          })
        ])
      });
    } else if (this.action.name == "update") {
      this.reactiveForm = new FormGroup({
        'id': new FormControl(this.customerInformation.id),
        'name': new FormControl(this.customerInformation.name, [Validators.required]),
        'birthPlace': new FormControl(this.customerInformation.birthPlace, [Validators.required]),
        'email' : new FormControl(this.customerInformation.email, [Validators.required, Validators.email]),
        'gender' : new FormControl(this.customerInformation.gender, [Validators.required]),
        'dateOfBirth': new FormControl(this.customerInformation.dateOfBirth, Validators.required),
        'profileImage': new FormControl(this.customerInformation.profileImage, [Validators.required]),
        'motherName': new FormControl(this.customerInformation.motherName, [Validators.required]),
        'addresses' : new FormArray([])
      });
      this.customerInformation.addresses.forEach(address => {
        const formAddress = new FormGroup({
          'fullAddress': new FormControl(address.fullAddress, [Validators.required]),
          'country': new FormControl(address.country, [Validators.required]),
          'city': new FormControl(address.city, [Validators.required]),
          'zipCode': new FormControl(address.zipCode, [Validators.required])
        });
        this.addressesArray.push(formAddress)
      });
    }
  }

  get addressesArray() {
    return this.reactiveForm.get('addresses') as FormArray;
  }

  addNewAddress() {
    const formAddress = new FormGroup({
      'fullAddress': new FormControl(null, [Validators.required]),
      'country': new FormControl(null, [Validators.required]),
      'city': new FormControl(null, [Validators.required]),
      'zipCode': new FormControl(null, [Validators.required])
    });
    this.addressesArray.push(formAddress)
    console.log(this.addressesArray)
  }

  deleteAddress(index: number) {
    this.addressesArray.removeAt(index)
  }

  submitForm(event: Event) {
    event.preventDefault(); 
    if (this.reactiveForm.valid) {
      this.reactiveForm.patchValue({
        'id' : this._customerService.generateUniqueID()
      })
      const formData = this.reactiveForm.value;
      this._customerService.addNewCustomer(formData);
      this.router.navigateByUrl("/list-customer");
    } else {
      console.log("Form is invalid!");
    }
  }

  saveForm(event: Event) {
    event.preventDefault(); 
    if (this.reactiveForm.valid) {
      const formData = this.reactiveForm.value;
      this._customerService.updateCustomer(formData);
      this.router.navigateByUrl("list-customer/detail?id="+formData.id);
    } else {
      console.log("Form is invalid!");
    }
  }


  cancelForm() {
    if (this.action.name === "add") {
      this.router.navigateByUrl("/");
    } else if (this.action.name == "update") {
      this.router.navigateByUrl("list-customer/detail?id="+this.customerInformation.id);
    }
  }

  openFormAddress() {
    this.openMainForm = false;
  }

  backToMainForm() {
    this.openMainForm = true;
  }
}
