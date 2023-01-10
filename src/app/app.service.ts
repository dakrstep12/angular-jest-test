import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { IProduct } from './Interface/app.interface';
import { HttpClient  } from '@angular/common/http';

const products : IProduct[] = [
  { id: 1,
    title: 'Banana',
    price: 2000,
    inStock: true
  },
  { id: 2,
    title: 'Apple',
    price: 1000,
    inStock: false
  },
  { id: 3,
    title: 'Mango',
    price: 2500,
    inStock: true
  },
  { id: 4,
    title: 'Lemon',
    price: 500,
    inStock: true
  }
];

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private ProductList = new BehaviorSubject<IProduct[]>([]);
  ProductList$ = this.ProductList.asObservable();

  AddProducts() {
    // console.log('Add Products List', products);
    return this.ProductList.next(products);
  }
}
