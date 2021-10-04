import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrandComponent } from './brand.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    BrandComponent,
    DashboardComponent,
    CategoryComponent,
    ProductDetailComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
})
export class BrandModule { }
