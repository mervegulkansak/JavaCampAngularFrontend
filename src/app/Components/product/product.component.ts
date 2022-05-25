import { Product } from './../../Models/product';
import { ProductService } from './../../services/product.service';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  products: Product[] = [];
  dataLoaded = false;
  filterText=" ";
  // productResponseModel:ProductResponseModel={
  //   data : this.products,
  //   message:"",
  //   success:true
  // };
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

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
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
    this.products = response.data
    this.dataLoaded =true;
    })
  }

  addToCart(product:Product){
    this.toastrService.success("Sepete Eklendi",product.productName)
  }
}
