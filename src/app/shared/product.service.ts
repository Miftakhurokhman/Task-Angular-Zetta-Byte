import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private ProductSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor() { this.initializeProduct() }

  private initializeProduct() {
    const initialProduct = [
      {
        'id': "adsdad",
        'productName': "Oppo A3s",
        'productPrice': "3000000",
        'productImage' : "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-2627984/oppo_oppo-a3s-smartphone--16gb-2gb-_full06.jpg",
        'type': "Smartphone",
        'productStock': 2,
        'productDescription': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ut praesentium placeat aspernatur voluptatibus consequuntur, commodi optio asperiores sed veniam tempora doloribus voluptatum sit velit itaque nihil animi? Harum deleniti recusandae est quae. Perferendis nam, et excepturi inventore non fuga molestias voluptate? Sit vel maxime deserunt optio recusandae voluptate impedit!"
      },
      {
        'id': "adsdad",
        'productName': "Xiaomi",
        'productPrice': "3000000",
        'productImage' : "https://migadget.id/wp-content/uploads/2021/07/Xiaomi-Mi-33W-Wall-Charger-Putih.jpg",
        'type': "Charger",
        'productStock': 2,
        'productDescription': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ut praesentium placeat aspernatur voluptatibus consequuntur, commodi optio asperiores sed veniam tempora doloribus voluptatum sit velit itaque nihil animi? Harum deleniti recusandae est quae. Perferendis nam, et excepturi inventore non fuga molestias voluptate? Sit vel maxime deserunt optio recusandae voluptate impedit!"
      },
      {
        'id': "adsdad",
        'productName': "Samsung 1wwq",
        'productPrice': "3000000",
        'productImage' : "https://image1ws.indotrading.com/s3/productimages/webp/co64067/p1180324/w425-h425/3434543f-183f-42fd-84e7-5fdcb4a13ecf.jpg",
        'type': "TWS",
        'productStock': 2,
        'productDescription': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ut praesentium placeat aspernatur voluptatibus consequuntur, commodi optio asperiores sed veniam tempora doloribus voluptatum sit velit itaque nihil animi? Harum deleniti recusandae est quae. Perferendis nam, et excepturi inventore non fuga molestias voluptate? Sit vel maxime deserunt optio recusandae voluptate impedit!"
      }
    ]
    this.ProductSubject.next(initialProduct);
  }

  deleteProduct(id: string) {
    let currentProducts = this.ProductSubject.getValue();
    const index = currentProducts.findIndex(Product => Product.id === id);
    if (index !== -1) {
      currentProducts.splice(index, 1);
      this.ProductSubject.next(currentProducts);
    }
  }

  getProduct(id: string): Observable<any> {
    return this.ProductSubject.pipe(
      map(Products => {
        const foundProduct = Products.find(Product => Product.id === id);
        return foundProduct ? foundProduct : "Tidak menemukan data";
      })
    );
  }

  getProductBasedOnType(Type: string): Observable<any[]> {
    return this.ProductSubject.pipe(
      map(Products => Products.filter(Product => Product.type === Type))
    );
  }

  addNewProduct(NewProduct: any) {
    let currentList = this.ProductSubject.getValue();
      currentList.push(NewProduct);
      this.ProductSubject.next(currentList);
  }

  updateProduct(changeProduct: any) {
    let currentProducts = this.ProductSubject.getValue();
    const index = currentProducts.findIndex(Product => Product.id === changeProduct.id);
    if (index !== -1) {
      currentProducts[index] = { ...currentProducts[index], ...changeProduct };
      this.ProductSubject.next(currentProducts);
    } else {
      console.error('Produk tidak ditemukan.');
    }
  }

  generateUniqueID(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = 5;
    let generatedID = '';
  
    do {
      generatedID = '';
      for (let i = 0; i < idLength; i++) {
        generatedID += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    } while (this.isIDExists(generatedID));
  
    return generatedID;
  }
  
  isIDExists(id: string): boolean {
    const currentList = this.ProductSubject.getValue();
    return currentList.some(Product => Product.id === id);
  }
}
