import { Product } from 'src/app/Models/product';
import { ListResponseModel } from './../Models/listResponseModel';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = "http://localhost:8080/api/"
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiURL + "/products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)

    
  }

  getProductsByCategory(category:number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiURL + "/products/getByCategoryId?category=" + category
    // console.log(newPath);
    return this.httpClient.get<ListResponseModel<Product>>(newPath)


  }

}
