import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
  ListProduct : any;
  @Input() typeProduct: string = "";

  constructor(private _productService: ProductService, private router: Router){}

  ngOnInit(): void {
    this._productService.getProductBasedOnType(this.typeProduct).subscribe(data => {
      this.ListProduct = data
    })
  }

  openDetail(id: string){
    this.router.navigate(['/detail'], {queryParams:{id: id}})
  }

  openForm(id: string){
    this.router.navigate(["/form"], {queryParams:{action: "update", id: id}})
  }
}
