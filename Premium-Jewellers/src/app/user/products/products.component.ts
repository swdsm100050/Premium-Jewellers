import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  user:any;
  constructor(private service: UserService){}
  
  ngOnInit(){
    this.service.getUserData().subscribe(data => this.user=data);
  }
  filters=[
    {"title":"price","options":["low to high","high to low"]},
    {"title":"metal","options":["low to high","high to low"]},
    {"title":"glod purity","options":["low to high","high to low"]},
    {"title":"gender","options":["low to high","high to low"]},
    {"title":"offers","options":["low to high","high to low"]},
    {"title":"product type","options":["low to high","high to low"]},
  ]
  sort_by=[
    {"title":"price","options":["low to high","high to low"]},
  ]
}
