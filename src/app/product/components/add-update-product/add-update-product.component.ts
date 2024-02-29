import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, input } from '@angular/core';
import { ProductService } from '../../../shared/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrl: './add-update-product.component.css'
})
export class AddUpdateProductComponent implements OnInit, OnDestroy{
  // @Output() productHasBeenUpdated = new EventEmitter<(boolean)>();
  // @Output() newProductHasBeenAdded = new EventEmitter<(boolean)>();
  // @Output() cancelUpdate = new EventEmitter<(boolean)>();
  // @Output() cancelAdd = new EventEmitter<(boolean)>();
  // @Input() changeId: any;
  // @Input() productDetail: any = {};
  productUpdated = {
        id : "",
        name : "",
        type : "",
        price : 0,
        stok : 0,
        image_url : "",
        description : ""
  }
  action = {
    name : "",
    id : ""
  }
  alertMessage: string = "";
  displayAlert: boolean = false;
  editProduct: boolean = false;
  idInputed: string = "";
  nameInputed: string = "";
  typeInputed: string = "";
  descInputed: string = "";
  stockInputed: number = 0;
  priceInputed: number = 0;
  imageInputed: string = "";

  constructor(private _productService: ProductService, private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.action.name = params["action"];
      if (this.action.name == "update") {
        this.editProduct = true;
        this.action.id = params["id"];
        this._productService.getProduct(this.action.id).subscribe(data => {
          this.productUpdated = data;
        })
      }
    })
    // if (this.productDetail.id!=null) {
    //   this.editProduct= true;
    //   // console.log(this.productDetail);
    //   this.idInputed = this.productDetail.id
    //   this.nameInputed = this.productDetail.name;
    //   this.typeInputed = this.productDetail.type;
    //   this.descInputed = this.productDetail.description;
    //   this.stockInputed = this.productDetail.stok;
    //   this.priceInputed = this.productDetail.price;
    //   this.imageInputed = this.productDetail.image_url;
    // }
  }

  ngOnDestroy(): void {
    // this.changeId = "";
    this.editProduct= false;
    // this.idInputed = '';
    // this.nameInputed = '';
    // this.typeInputed = '';
    // this.descInputed = '';
    // this.stockInputed = 0;
    // this.priceInputed = 0;
    // this.imageInputed = '';
    this.action = {
      name : "",
      id : ""
    }
    this.alertMessage = "";
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
    // this.productUpdated.id = this.idInputed;
    // this.productUpdated.description = this.descInputed;
    // this.productUpdated.image_url = this.imageInputed;
    // this.productUpdated.name = this.nameInputed;
    // this.productUpdated.price = this.priceInputed;
    // this.productUpdated.stok = this.stockInputed;
    // this.productUpdated.type = this.typeInputed;
    this._productService.updateProduct(this.productUpdated);
    this.alertMessage = "updated"
    this.displayAlert = true;
    setTimeout(() => {
      this.router.navigateByUrl("/detail?id="+this.action.id)
    }, 2500);
    //this.productHasBeenUpdated.emit(true);
    // console.log("update berhasil");
  }

  addingNewProduct () {
    this.productUpdated.id = this._productService.generateUniqueID();
    // this.productUpdated.description = this.descInputed;
    // this.productUpdated.image_url = this.imageInputed;
    // this.productUpdated.name = this.nameInputed;
    // this.productUpdated.price = this.priceInputed;
    // this.productUpdated.stok = this.stockInputed;
    // this.productUpdated.type = this.typeInputed;
    this._productService.addNewProduct(this.productUpdated);
    this.alertMessage = "added"
    this.displayAlert = true;
    setTimeout(() => {
      this.router.navigateByUrl("/detail?id="+this.productUpdated.id)
    }, 2500);
    // this.newProductHasBeenAdded.emit(true);
  }

  cancelForm(){
    if (this.editProduct) {
      this.router.navigateByUrl("/detail?id="+this.action.id)
      // this._productService.getChoosedProduct()
      // this.cancelUpdate.emit(true);
    } else {
      this.router.navigateByUrl("/")
      // this.cancelAdd.emit(true);
    }
  }
}
