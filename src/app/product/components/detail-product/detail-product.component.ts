import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from '../../../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit, OnDestroy {
  id: string = "";
  alert = {
    display: false,
    message: ""
  }
  productDetail: any = {};
  productIdNotFounded : boolean = false
  editProduct: boolean = false;

  constructor(private _productService: ProductService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadProductDetail();
    });
  }

  ngOnDestroy(): void {
      this.productDetail=[];
      this.id="";
      this.alert.message = "";
  }

  loadProductDetail() {
    this._productService.getProduct(this.id).subscribe(data => {
      this.productDetail = data;
      this.productIdNotFounded = data == "Tidak menemukan data";
    });
  }

  editingProduct(id:string) {
    this.id = id;
    this.editProduct = true
  }

  productHasBeenUpdated(productIsUpdated : boolean) {
    this.editProduct = !productIsUpdated;
    this.alert.message = "updated";
    this.alert.display = true
    setTimeout(() => {; 
      this.alert.display = false
    }, 2500);
  }

  deleteProduct(id: string) {
    this.alert.message = "deleted";
    this.alert.display = true
    setTimeout(() => {
      this.router.navigate(['/']);
      this._productService.deleteProduct(id);
    }, 2500);
  }

  cancelUpdate(cancelUp: boolean) {
    this.editProduct = !cancelUp;
  }
}
