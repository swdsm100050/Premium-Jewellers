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
