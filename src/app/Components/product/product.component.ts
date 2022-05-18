import { ProductService } from './../../services/product.service';

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  products: Product[] = [];
  dataLoaded = false;
  // productResponseModel:ProductResponseModel={
  //   data : this.products,
  //   message:"",
  //   success:true
  // };
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded =true;
    })
  }

}