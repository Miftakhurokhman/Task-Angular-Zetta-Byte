import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../shared/product.service';
import { Router } from '@angular/router';

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

  constructor(private _productService: ProductService, private router:Router) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.productList = data;
      this.listProductIsEmpty = this.productList.length === 0; 
    });
  }

  openDetailProduct(ID:string) {
    this.router.navigateByUrl('/detail?id='+ ID);
  }

  addingNewProduct () {
    this.router.navigateByUrl('/form?action=add');
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
