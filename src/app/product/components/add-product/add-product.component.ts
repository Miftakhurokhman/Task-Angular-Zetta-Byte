import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, input } from '@angular/core';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit, OnDestroy{
  @Output() productHasBeenUpdated = new EventEmitter<(boolean)>();
  @Output() newProductHasBeenAdded = new EventEmitter<(boolean)>();
  @Input() changeId: any;
  @Input() productDetail: any = {};
  productUpdated = {
        id : "",
        name : "",
        type : "",
        price : 0,
        stok : 0,
        image_url : "",
        description : ""
  }
  editProduct: boolean = false;
  idInputed: string = "";
  nameInputed: string = "";
  typeInputed: string = "";
  descInputed: string = "";
  stockInputed: number = 0;
  priceInputed: number = 0;
  imageInputed: string = "";

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    if (this.productDetail.id!=null) {
      this.editProduct= true;
      // console.log(this.productDetail);
      this.idInputed = this.productDetail.id
      this.nameInputed = this.productDetail.name;
      this.typeInputed = this.productDetail.type;
      this.descInputed = this.productDetail.description;
      this.stockInputed = this.productDetail.stok;
      this.priceInputed = this.productDetail.price;
      this.imageInputed = this.productDetail.image_url;
    }
  }

  ngOnDestroy(): void {
    this.changeId = "";
    this.editProduct= false;
    this.idInputed = '';
    this.nameInputed = '';
    this.typeInputed = '';
    this.descInputed = '';
    this.stockInputed = 0;
    this.priceInputed = 0;
    this.imageInputed = '';
    this.productUpdated = {
      id : "",
      name : "",
      type : "",
      price : 0,
      stok : 0,
      image_url : "",
      description : ""
}
  }

  saveUpdate() {
    this.productUpdated.id = this.idInputed;
    this.productUpdated.description = this.descInputed;
    this.productUpdated.image_url = this.imageInputed;
    this.productUpdated.name = this.nameInputed;
    this.productUpdated.price = this.priceInputed;
    this.productUpdated.stok = this.stockInputed;
    this.productUpdated.type = this.typeInputed;
    this._productService.updateProduct(this.productUpdated);
    this.productHasBeenUpdated.emit(true);
    
  }

  addingNewProduct () {
    this.productUpdated.id = this._productService.generateUniqueID();
    this.productUpdated.description = this.descInputed;
    this.productUpdated.image_url = this.imageInputed;
    this.productUpdated.name = this.nameInputed;
    this.productUpdated.price = this.priceInputed;
    this.productUpdated.stok = this.stockInputed;
    this.productUpdated.type = this.typeInputed;
    this._productService.addNewProduct(this.productUpdated);
    this.newProductHasBeenAdded.emit(true);
  }

  cancelForm(){
    if (this.editProduct) {
      this.productHasBeenUpdated.emit(true);
    } else {
      this.newProductHasBeenAdded.emit(true);
    }
  }
}
