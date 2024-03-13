import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit{
  detailProduct: any = "";
  constructor(private _productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe( params => {
        this._productService.getProduct(params['id']).subscribe( data => {
          this.detailProduct = data;
        })
      })
  }

  openDetail() {
    this.router.navigate(['/form'], {queryParams:{action: "update", id : this.detailProduct.id}})
  }
}
