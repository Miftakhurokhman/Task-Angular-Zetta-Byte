import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
  @Output() choosedCard = new EventEmitter<(string)>();
  @Output() addAlert = new EventEmitter<(string)>();
  public productList: any[] = [];
  addProduct: boolean = false;
  listProductIsEmpty: boolean = false;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.productList = data;
      this.listProductIsEmpty = this.productList.length === 0; 
    });
  }

  getChoosedCard(id: string) {
    this.choosedCard.emit(id);
  }

  addingNewProduct () {
    this.addProduct = true
  }

  newProductHasBeenAdded (productHasBeenAdded: boolean) {
    this.addProduct = !productHasBeenAdded;
    this.addAlert.emit("added")
  }

  cancelAdd(cancel_add: boolean) {
    this.addProduct = !cancel_add;
  }
}
