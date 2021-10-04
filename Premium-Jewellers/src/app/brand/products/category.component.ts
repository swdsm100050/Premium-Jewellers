import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-products',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  user:any;
  constructor(private service: BrandService){}
  
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
