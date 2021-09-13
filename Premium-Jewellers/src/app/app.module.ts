import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { JewelleryCollectionComponent } from './jewellery-collection/jewellery-collection.component';
import { EngagementComponent } from './engagement/engagement.component';
import { WatchesComponent } from './watches/watches.component';
import { HouseComponent } from './house/house.component';
import { NgModule} from '@angular/core';

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
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
