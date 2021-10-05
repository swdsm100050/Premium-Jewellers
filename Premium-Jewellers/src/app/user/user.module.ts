import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { UserComponent } from './user.component';
import { UserDashComponent } from './user-dash/user-dash.component';



@NgModule({
  declarations: [
    UserComponent,
    UserDashComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[
  ]
})
export class UserModule { }
