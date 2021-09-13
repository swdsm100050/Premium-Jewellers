import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngagementComponent } from './engagement/engagement.component';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { JewelleryCollectionComponent } from './jewellery-collection/jewellery-collection.component';
import { WatchesComponent } from './watches/watches.component';

const routes: Routes = [
  {path: '',redirectTo: '/high-jewellery',pathMatch: 'full'},
  {path:'high-jewellery',component:HomeComponent},
  {path:'jewellery-collection',component:JewelleryCollectionComponent},
  {path:'engagement',component:EngagementComponent},
  {path:'watches',component:WatchesComponent},
  {path:'house',component:HouseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
