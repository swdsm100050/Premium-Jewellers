import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  data:any=[];

  constructor(private service:UserService) { }
  ngOnInit(): void {
   this.service.getUserData().subscribe((data)=> {
     this.data=data 
    })
  }

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
