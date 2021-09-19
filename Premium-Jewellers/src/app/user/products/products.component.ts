import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor() { }
  isProduct=false
  products=[
    {"isProduct":false,"isOffer":true,"col_p":"col-xl-6 col-lg-4 col-md-6 d-flex align-items-center justify-content-center","offer_imgUrl1":"../../../assets/user/products/offer3.png"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":false,"isOffer":true,"col_p":"col-xl-6 col-lg-4 col-md-6 d-flex align-items-center justify-content-center","offer_imgUrl1":"../../../assets/user/products/offer4.png"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":false,"isOffer":true,"col_p":"col-xl-6 col-lg-4 col-md-6 d-flex align-items-center justify-content-center","offer_imgUrl1":"../../../assets/user/products/offer3.png"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":false,"isOffer":true,"col_p":"col-xl-6 col-lg-4 col-md-6 d-flex align-items-center justify-content-center","offer_imgUrl1":"../../../assets/user/products/offer3.png"},
    {"isProduct":false,"isOffer":true,"col_p":"col-xl-6 col-lg-4 col-md-6 d-flex align-items-center justify-content-center","offer_imgUrl1":"../../../assets/user/products/offer4.png"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":false,"isOffer":true,"col_p":"col-md-12 d-flex align-items-center justify-content-center","offer_imgUrl1":"../../../assets/user/products/offer2.png"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"isProduct":true,"isOffer":false,"col_p":"col-xl-3 col-lg-4 col-md-6","p_imgUrl1":"../../../assets/user/dashboard/category33.png","p_imgUrl2":"../../../assets/user/dashboard/category33.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
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
