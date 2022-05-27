import { ProductAddComponent } from './Components/product-add/product-add.component';

import { ProductComponent } from './Components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent},

  {path:"products/category/:category", component:ProductComponent},
  {path:"products/add", component:ProductAddComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
