import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
  public productList: any[] = [];
  alert = {
    display : false,
    message : ""
  }
  addProduct: boolean = false;
  listProductIsEmpty: boolean = false;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.productList = data;
      this.listProductIsEmpty = this.productList.length === 0; 
    });
  }

  addingNewProduct () {
    this.addProduct = true
  }

  newProductHasBeenAdded (productHasBeenAdded: boolean) {
    this.addProduct = !productHasBeenAdded;
    this.alert.message = "added"
    this.alert.display = true;
    setTimeout(() => {
      this.alert.display = false
    }, 2500);
  }

  cancelAdd(cancel_add: boolean) {
    this.addProduct = !cancel_add;
  }
}
