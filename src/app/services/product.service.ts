import { ListResponseModel } from './../Models/listResponseModel';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = "http://localhost:8080/api/products/getall"
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {

    return this.httpClient.get<ListResponseModel<Product>>(this.apiURL)
    
  }
}
