//import { CategoryComponent } from './Components/category/category.component';
import { ProductComponent } from './Components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
