import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { TextpipePipe } from '../textpipe.pipe';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ReviewCardComponent,
    TextpipePipe,
    CartComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    ReviewCardComponent,
    TextpipePipe,
    CartComponent
  ]
})
export class SharedModule { }
