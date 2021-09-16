import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor() { }
  products=[
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"col":"col-md-3","svg_url1":"../../../assets/user/dashboard/category33.png","svg_url2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
  ]
  ngOnInit(): void {
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
