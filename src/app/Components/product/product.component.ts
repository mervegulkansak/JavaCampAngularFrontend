import { ProductService } from './../../services/product.service';

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(params=>{
      if(params["category"]){
        this.getProductsByCategory(params["category"])
      }else{
        this.getProducts()
      }
    })
  }
  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded =true;
    })
  }

  getProductsByCategory(category:number) {
    this.productService.getProductsByCategory(category).subscribe(response=>{
      this.products = response.data
      this.dataLoaded =true;
    })
  }
}
