import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { JewelleryCollectionComponent } from './jewellery-collection/jewellery-collection.component';
import { EngagementComponent } from './engagement/engagement.component';
import { WatchesComponent } from './watches/watches.component';
import { HouseComponent } from './house/house.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JewelleryCollectionComponent,
    EngagementComponent,
    WatchesComponent,
    HouseComponent
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
