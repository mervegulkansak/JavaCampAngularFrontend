import { Category } from './../../Models/category';
import { CategoryService } from './../../services/category.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]=[];
  currentCategory:Category;
  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
   this.getCategories();
  }
 
  getCategories() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
      
    })
  }
  setCurrentCategory(category:Category){
    this.currentCategory = category
  }

  getCurrentCategoryClass(category:Category){
    if (category==this.currentCategory) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  getAllCurrentCategory(){
    if (!this.currentCategory) {
      return "list-group-item-action-active"
    } else {
      return "list-group-item"
    }
  }
}
