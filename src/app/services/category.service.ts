import { Category } from './../Models/category';
import { ListResponseModel } from './../Models/listResponseModel';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiURL = "http://localhost:8080/api/categories/getall"
  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ListResponseModel<Category>> {

    return this.httpClient.get<ListResponseModel<Category>>(this.apiURL)
    
  }
}
