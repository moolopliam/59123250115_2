import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import{HomeComponent} from './home/home.component';
import{CreateproductComponent} from './home/createproduct/createproduct.component';
import{BMIComponent} from './home/bmi/bmi.component';
//import {UpdateproductComponent} from './home/updateproduct/updateproduct.component';

const routes:Routes=[
  { path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'createproduct',component:CreateproductComponent},
  {path:'bmi',component:BMIComponent},
  {path:'home/edit/:id',component:CreateproductComponent}


];

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }