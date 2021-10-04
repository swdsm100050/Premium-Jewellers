import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngagementComponent } from './engagement/engagement.component';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { JewelleryCollectionComponent } from './jewellery-collection/jewellery-collection.component';
import { CartComponent } from './brand/cart/cart.component';
import { DashboardComponent } from './brand/dashboard/dashboard.component';
import { ProductDetailComponent } from './brand/product-detail/product-detail.component';
import { BrandComponent } from './brand/brand.component';
import { WatchesComponent } from './watches/watches.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './brand/category/category.component';

const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'collection',component:JewelleryCollectionComponent},
  {path:'engagement',component:EngagementComponent},
  {path:'watches',component:WatchesComponent},
  {path:'house',component:HouseComponent},
  {path:'brand', component:BrandComponent, children:[
    {path:'',component:DashboardComponent},
    {path:'category',component:CategoryComponent},
    {path:'0',component:ProductDetailComponent},
    {path:'cart',component:CartComponent},
  ]},
  {path:'user', component:UserComponent, children:[
    {path:'',component:UserComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
