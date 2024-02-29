import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private choosedProduct: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { 
    this.initializeProductList();
  }

  private initializeProductList() {
    const initialProductList = [
      { 
        id : "1243241",
        name : "Oppo A18",
        type : "SmartPhone",
        price : 1500000,
        stok : 10,
        image_url : "https://cworld.id/wp-content/uploads/2023/10/ezgif.com-webp-to-jpg-38.jpg",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ea fugiat, cum, fugit iusto ipsum quam, dignissimos veniam rerum consequatur reiciendis id repellat non magni dolore cumque quod a quisquam eligendi! Consequuntur, ea vitae? Deserunt, a error? Veniam harum libero omnis exercitationem unde delectus recusandae corporis facilis sit laboriosam. Ipsa."
      },
      { 
        id : "hthfdsdfs",
        name : "Samsung A54",
        type : "SmartPhone",
        price : 1500000,
        stok : 10,
        image_url : "https://www.91-img.com/pictures/148192-v2-samsung-galaxy-a54-5g-mobile-phone-hres-3.jpg",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ea fugiat, cum, fugit iusto ipsum quam, dignissimos veniam rerum consequatur reiciendis id repellat non magni dolore cumque quod a quisquam eligendi! Consequuntur, ea vitae? Deserunt, a error? Veniam harum libero omnis exercitationem unde delectus recusandae corporis facilis sit laboriosam. Ipsa."
      },
      { 
        id : "fefweqa",
        name : "Samsung A34",
        type : "SmartPhone",
        price : 1500000,
        stok : 10,
        image_url : "https://th.bing.com/th/id/OIP.-7FialhfHJabSvMsgWS2YAHaHa?rs=1&pid=ImgDetMain",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ea fugiat, cum, fugit iusto ipsum quam, dignissimos veniam rerum consequatur reiciendis id repellat non magni dolore cumque quod a quisquam eligendi! Consequuntur, ea vitae? Deserunt, a error? Veniam harum libero omnis exercitationem unde delectus recusandae corporis facilis sit laboriosam. Ipsa."
      },
      { 
        id : "berfdasda",
        name : "Samsung S22 Ultra",
        type : "SmartPhone",
        price : 1500000,
        stok : 10,
        image_url : "https://media.extra.com/s/aurora/100307931_800/Samsung-Galaxy-S22-Ultra%2C-5G%2C-256GB%2C-Phantom-Black?locale=en-GB,en-*,*",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ea fugiat, cum, fugit iusto ipsum quam, dignissimos veniam rerum consequatur reiciendis id repellat non magni dolore cumque quod a quisquam eligendi! Consequuntur, ea vitae? Deserunt, a error? Veniam harum libero omnis exercitationem unde delectus recusandae corporis facilis sit laboriosam. Ipsa."
      },
      { 
        id : "vwefwas",
        name : "Xiaomi 13",
        type : "SmartPhone",
        price : 1500000,
        stok : 10,
        image_url : "https://cdn.dxomark.com/wp-content/uploads/medias/post-139298/Xiaomi-13-featured-image-packshot-review-Recovered.jpg",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ea fugiat, cum, fugit iusto ipsum quam, dignissimos veniam rerum consequatur reiciendis id repellat non magni dolore cumque quod a quisquam eligendi! Consequuntur, ea vitae? Deserunt, a error? Veniam harum libero omnis exercitationem unde delectus recusandae corporis facilis sit laboriosam. Ipsa."
      },
      { 
        id : "asdedd",
        name : "Xiomi 12",
        type : "SmartPhone",
        price : 1500000,
        stok : 10,
        image_url : "https://www.mobiledokan.co/wp-content/uploads/2020/09/Xiaomi-Mi-11-Pro-Purple.jpg",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ea fugiat, cum, fugit iusto ipsum quam, dignissimos veniam rerum consequatur reiciendis id repellat non magni dolore cumque quod a quisquam eligendi! Consequuntur, ea vitae? Deserunt, a error? Veniam harum libero omnis exercitationem unde delectus recusandae corporis facilis sit laboriosam. Ipsa."
      },
      { 
        id : "gerwfadsa",
        name : "Xiaomi 12S Ultra",
        type : "SmartPhone",
        price : 1500000,
        stok : 10,
        image_url : "https://th.bing.com/th/id/OIP.2rXBotdOOynleCBkKcvmnwHaHa?rs=1&pid=ImgDetMain",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ea fugiat, cum, fugit iusto ipsum quam, dignissimos veniam rerum consequatur reiciendis id repellat non magni dolore cumque quod a quisquam eligendi! Consequuntur, ea vitae? Deserunt, a error? Veniam harum libero omnis exercitationem unde delectus recusandae corporis facilis sit laboriosam. Ipsa."
      },


    ]
    this.productListSubject.next(initialProductList);
  }

  getChoosedProduct(): Observable<string> {
    return this.choosedProduct.asObservable();
  }

  sendChoosedProduct(id: string) {
    this.choosedProduct.next(id);
    console.log(this.choosedProduct)
  }

  getProducts(): Observable<any[]> {
    return this.productListSubject.asObservable();
  }

  getProduct(id: string): Observable<any> {
    return this.productListSubject.pipe(
      map(products => {
        const foundProduct = products.find(product => product.id === id);
        return foundProduct ? foundProduct : "Tidak menemukan data";
      })
    );
  }

  updateProduct(changeProduct: any) {
    let currentProducts = this.productListSubject.getValue();
    const index = currentProducts.findIndex(product => product.id === changeProduct.id);
    if (index !== -1) {
      currentProducts[index] = { ...currentProducts[index], ...changeProduct };
      this.productListSubject.next(currentProducts);
    } else {
      console.error('Produk tidak ditemukan.');
    }
  }

  addNewProduct(newProduct: any) {
    let currentProducts = this.productListSubject.getValue();
    currentProducts.push(newProduct);
    this.productListSubject.next(currentProducts);
  }

  deleteProduct(id: string) {
    let currentProducts = this.productListSubject.getValue();
    const index = currentProducts.findIndex(product => product.id === id);
    if (index !== -1) {
      currentProducts.splice(index, 1);
      this.productListSubject.next(currentProducts);
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
    const currentProducts = this.productListSubject.getValue();
    return currentProducts.some(product => product.id === id);
  }
}
