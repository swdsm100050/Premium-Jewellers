import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products:any=[];
  private url="../../assets/data/user/product-list.json";
  constructor(private http: HttpClient){}
  async getProducts(){
    let response = await this.http.get<any>(this.url).toPromise()
      this.products=response
      console.log(response)
  }
  ngOnInit(){
    this.getProducts()
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
