import { Component } from '@angular/core';

@Component({
  selector: 'app-products-information',
  templateUrl: './products-information.component.html',
  styleUrl: './products-information.component.css'
})
export class ProductsInformationComponent {
  displayDetail: boolean = false
  idDetail: string = "";
  getDetailCard(id: string) {
    this.idDetail = id;
    this.displayDetail =  true;
  }

  productHasBeenDeleted(productDeleted: boolean) {
    this.displayDetail= !productDeleted
  }
}
