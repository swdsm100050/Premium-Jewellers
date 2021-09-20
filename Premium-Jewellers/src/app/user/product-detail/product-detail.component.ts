import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides=[
   {"imgUrl":"../../../assets/user/dashboard/category33.png"},
   {"imgUrl":"../../../assets/user/dashboard/category33.png"},
   {"imgUrl":"../../../assets/user/dashboard/category33.png"},
   {"imgUrl":"../../../assets/user/dashboard/category33.png"},
   {"imgUrl":"../../../assets/user/dashboard/category33.png"},
  ]
  services=[
    {"title":"excellent quality","img":"../../../assets/user/dashboard/feature1.svg"},
    {"title":"excellent quality","img":"../../../assets/user/dashboard/feature2.svg"},
    {"title":"excellent quality","img":"../../../assets/user/dashboard/feature3.svg"},
    {"title":"excellent quality","img":"../../../assets/user/dashboard/feature4.svg"},
    {"title":"excellent quality","img":"../../../assets/user/dashboard/feature5.svg"},
    {"title":"excellent quality","img":"../../../assets/user/dashboard/feature6.svg"},
  ]
  price_variant=[
    {"title":"excellent quality","img":"../../../assets/home/icon1.png"},
    {"title":"excellent quality","img":"../../../assets/home/icon1.png"},
    {"title":"excellent quality","img":"../../../assets/home/icon1.png"},
    {"title":"excellent quality","img":"../../../assets/home/icon1.png"},
  ]
  story=[
    {"title":"the inspiration","text":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum quos recusandae praesentium, nesciunt odio quaerat soluta veniam voluptate sit possimus cupiditate quas aut. Tempora fuga sunt eum consequatur eos."},
    {"title":"the inspiration","text":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum quos recusandae praesentium, nesciunt odio quaerat soluta veniam voluptate sit possimus cupiditate quas aut. Tempora fuga sunt eum consequatur eos."},
    {"title":"the inspiration","text":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum quos recusandae praesentium, nesciunt odio quaerat soluta veniam voluptate sit possimus cupiditate quas aut. Tempora fuga sunt eum consequatur eos."},
  ]
  stars=[
    {"rating":"5","rating_star":[{"class":"fa fa-star"},{"class":"fa fa-star"},{"class":"fa fa-star"},{"class":"fa fa-star"},{"class":"fa fa-star-half-o"},],"count":"(12)"},
    {"rating":"4","rating_star":[{"class":"fa fa-star"},{"class":"fa fa-star"},{"class":"fa fa-star"},{"class":"fa fa-star"},{"class":"fa fa-star-o"},],"count":"(12)"},
    {"rating":"3","rating_star":[{"class":"fa fa-star"},{"class":"fa fa-star"},{"class":"fa fa-star"},{"class":"fa fa-star-o"},{"class":"fa fa-star-o"},],"count":"(12)"},
    {"rating":"2","rating_star":[{"class":"fa fa-star"},{"class":"fa fa-star"},{"class":"fa fa-star-o"},{"class":"fa fa-star-o"},{"class":"fa fa-star-o"},],"count":"(12)"},
    {"rating":"1","rating_star":[{"class":"fa fa-star"},{"class":"fa fa-star-o"},{"class":"fa fa-star-o"},{"class":"fa fa-star-o"},{"class":"fa fa-star-o"},],"count":"(12)"},
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
