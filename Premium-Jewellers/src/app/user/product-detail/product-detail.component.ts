import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  constructor(private http:HttpClient) { }
  services:any=[]
  slides:any=[]
  price_variant:any=[]
  stars:any=[]
  async getServices(){
    let response= await this.http.get<any>("../../assets/data/user/product-detail/services.json").toPromise()
    this.services=response
  }
  async getSlides(){
    let response= await this.http.get<any>("../../assets/data/user/product-detail/slides.json").toPromise()
    this.slides=response
  }
  async getPrice_variant(){
    let response= await this.http.get<any>("../../assets/data/user/product-detail/price_variant.json").toPromise()
    this.price_variant=response
  }
  async getStars(){
    let response= await this.http.get<any>("../../assets/data/user/product-detail/stars.json").toPromise()
    this.stars=response
  }
  ngOnInit(): void {
    this.getServices()
    this.getSlides()
    this.getPrice_variant()
    this.getStars()
  }

  reviews=[
    {"heroImg":"../../../assets/user/user.png","pImg":"../../../assets/user/product-detail/ring.jpg"},
    {"heroImg":"../../../assets/user/user.png","pImg":"../../../assets/user/product-detail/ring.jpg"},
    {"heroImg":"../../../assets/user/user.png","pImg":"../../../assets/user/product-detail/ring.jpg"},
    {"heroImg":"../../../assets/user/user.png","pImg":"../../../assets/user/product-detail/ring.jpg"},
  ]
  story=[
    {"title":"the inspiration","text":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum quos recusandae praesentium, nesciunt odio quaerat soluta veniam voluptate sit possimus cupiditate quas aut. Tempora fuga sunt eum consequatur eos."},
    {"title":"the inspiration","text":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum quos recusandae praesentium, nesciunt odio quaerat soluta veniam voluptate sit possimus cupiditate quas aut. Tempora fuga sunt eum consequatur eos."},
    {"title":"the inspiration","text":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum quos recusandae praesentium, nesciunt odio quaerat soluta veniam voluptate sit possimus cupiditate quas aut. Tempora fuga sunt eum consequatur eos."},
  ]
  star=["fa fa-star-o","fa fa-star-o","fa fa-star-o","fa fa-star-o","fa fa-star-o",]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      100: {
        items: 2
      },
      200: {
        items: 3
      },
      300: {
        items: 4
      }
    },
    nav: true
  }
}
