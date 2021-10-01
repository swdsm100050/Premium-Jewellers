import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ReviewCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    ReviewCardComponent
  ]
})
export class SharedModule { }
