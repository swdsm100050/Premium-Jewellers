import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngagementComponent } from './engagement/engagement.component';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { JewelleryCollectionComponent } from './jewellery-collection/jewellery-collection.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProductsComponent } from './user/products/products.component';
import { UserComponent } from './user/user.component';
import { WatchesComponent } from './watches/watches.component';

const routes: Routes = [
  {path: '',redirectTo: '/high-jewellery',pathMatch: 'full'},
  {path:'high-jewellery',component:HomeComponent},
  {path:'jewellery-collection',component:JewelleryCollectionComponent},
  {path:'engagement',component:EngagementComponent},
  {path:'watches',component:WatchesComponent},
  {path:'house',component:HouseComponent},
  {path:'user', component:UserComponent, children:[
    {path:'',component:DashboardComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'products',component:ProductsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
