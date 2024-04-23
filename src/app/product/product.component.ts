import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  priceMax!:number

listProduct:Product[]=[];
constructor(private PS:ProductService){}
ngOnInit(){
  this.listProduct=this.PS.listProduct;
}
increment(id:number){
  this.listProduct[id].like++;
}

buy(id:number){
  this.listProduct[id].quantity--;

}
}
