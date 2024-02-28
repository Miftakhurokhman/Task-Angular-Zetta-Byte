import { Component } from '@angular/core';

@Component({
  selector: 'app-products-information',
  templateUrl: './products-information.component.html',
  styleUrl: './products-information.component.css'
})
export class ProductsInformationComponent {
  alertMessage: string =""
  displayDetail: boolean = false;
  displayAlert: boolean = false;
  idDetail: string = "";
  getDetailCard(id: string) {
    this.idDetail = id;
    this.displayDetail =  true;
  }

  openAlert(message: string) {
    this.alertMessage = message;
    this.displayAlert = true;
    setTimeout(()=>{this.displayAlert= false},2500)
  }

  productHasBeenDeleted(productDeleted: boolean) {
    this.displayDetail= !productDeleted
    this.openAlert("deleted")
  }
}
