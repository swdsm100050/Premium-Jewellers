import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { GiftingComponent } from './gifting/gifting.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    GiftingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CarouselModule
  ]
})
export class UserModule { }
