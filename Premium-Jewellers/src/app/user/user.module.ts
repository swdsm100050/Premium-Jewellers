import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDetailComponent,
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
export class UserModule { }
