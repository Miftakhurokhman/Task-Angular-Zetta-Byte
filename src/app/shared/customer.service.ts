import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private CustomerListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { 
    this.initializeCustomerList();
  }

  private initializeCustomerList() {
    const initialCustomerList = [
      {
        id : "asdfs",
        name : "Agus Santoso",
        gender : "Male",
        email : "asdasd@gmail.com",
        dateOfBirth : "2022-03-03",
        birthPlace : "Kebumen",
        profileImage : "https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
        motherName : "Alexandra",
        address: {
          fullAddress : "adas",
          city : "London",
          zipCode: "adasa"
        }
      },
      {
        id : "asdasd",
        name : "Rahman Sumarno",
        gender : "Male",
        email : "asdasd@gmail.com",
        dateOfBirth : "2022-03-03",
        birthPlace : "Kebumen",
        profileImage : "https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
        motherName : "Alexandra",
        address: {
          fullAddress : "adas",
          city : "London",
          zipCode: "adasa"
        }
      },
      {
        id : "frrsr",
        name : "Robi",
        gender : "Male",
        email : "asdasd@gmail.com",
        dateOfBirth : "2022-03-03",
        birthPlace : "Kebumen",
        profileImage : "https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
        motherName : "Alexandra",
        address: {
          fullAddress : "adas",
          city : "London",
          zipCode: "adasa"
        }
      },
      {
        id : "fsrsd",
        name : "Ahmad",
        gender : "Male",
        email : "asdasd@gmail.com",
        dateOfBirth : "2022-03-03",
        birthPlace : "Kebumen",
        profileImage : "https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
        motherName : "Alexandra",
        address: {
          fullAddress : "adas",
          city : "London",
          zipCode: "adasa"
        }
      }
    ]
    this.CustomerListSubject.next(initialCustomerList);
  }

  getAllCustomers(): Observable<any[]> {
    return this.CustomerListSubject.asObservable();
  }

  getCustomer(id: string): Observable<any> {
    return this.CustomerListSubject.pipe(
      map(products => {
        const foundProduct = products.find(product => product.id === id);
        return foundProduct ? foundProduct : "Tidak menemukan data";
      })
    );
  }

  addNewCustomer(NewCustomer: any) {
    let currentList = this.CustomerListSubject.getValue();
    currentList.push(NewCustomer);
    this.CustomerListSubject.next(currentList);
    console.log(this.CustomerListSubject)
  }

  updateCustomer(changeCustomer: any) {
    let currentCustomers = this.CustomerListSubject.getValue();
    const index = currentCustomers.findIndex(Customer => Customer.id === changeCustomer.id);
    if (index !== -1) {
      currentCustomers[index] = { ...currentCustomers[index], ...changeCustomer };
      this.CustomerListSubject.next(currentCustomers);
    } else {
      console.error('Produk tidak ditemukan.');
    }
  }
  
  deleteCustomer(id: string) {
    let currentCustomers = this.CustomerListSubject.getValue();
    const index = currentCustomers.findIndex(Customer => Customer.id === id);
    if (index !== -1) {
      currentCustomers.splice(index, 1);
      this.CustomerListSubject.next(currentCustomers);
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
    const currentList = this.CustomerListSubject.getValue();
    return currentList.some(customer => customer.id === id);
  }
}
