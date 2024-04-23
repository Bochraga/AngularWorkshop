import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
  //root c a dire dans toute l'appplication
})
export class ProductService {

  constructor() { }
  listProduct:Product[]=[
    {id:1,title:'product1',price:1500,quantity:10,like:0},
    {id:2,title:'iphone 12',price:1000,quantity:10,like:0},
    {id:3,title:'product 3',price:2000,quantity:10,like:0},
  ]
  addProduct(product: Product) {
    this.listProduct.push(product);
  }
}
