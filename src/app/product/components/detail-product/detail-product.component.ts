import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit, OnChanges, OnDestroy {
  @Output() productHasBeenDeleted = new EventEmitter<(boolean)>();
  @Output() updateAlert = new EventEmitter<(string)>();
  @Input() id: any;
  productDetail: any = {};
  idProductEdited: string = "";
  editProduct: boolean = false;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductDetail();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      this.loadProductDetail();
    }
  }

  ngOnDestroy(): void {
      this.productDetail=[];
      this.id="";
  }

  loadProductDetail() {
    this._productService.getProduct(this.id).subscribe(data => {
      this.productDetail = data;
    });
  }

  editingProduct(id:number) {
    this.id=id;
    this.editProduct = true
  }

  productHasBeenUpdated(productIsUpdated : boolean) {
    console.log(this.editProduct);
    this.editProduct = !productIsUpdated;
    this.updateAlert.emit("update");
  }

  deleteProduct(id: string) {
    this._productService.deleteProduct(id);
    this.productHasBeenDeleted.emit(true)
  }

  cancelUpdate(cancelUp: boolean) {
    this.editProduct = !cancelUp;
  }
}
