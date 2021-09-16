import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CarouselModule
  ]
})
export class UserModule { }
