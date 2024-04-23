import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  ResgisterForm = new FormGroup({
    id: new FormControl('',Validators.required),  
    title:  new FormControl('',[Validators.required,Validators.minLength(10)]),
    price:  new FormControl('',[Validators.required,Validators.pattern('[0-9]')]),
    quantity : new FormControl('',[Validators.required]),
    like : new FormControl('',[Validators.required]),
   
  });
  listProduct:Product[]=[];

  constructor(private productService: ProductService) {}
  Add() {
    this.productService.addProduct(this.ResgisterForm.value as any);
    console.log("Added Successfully");
  

}
}