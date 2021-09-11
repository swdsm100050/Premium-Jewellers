import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selected=[
    {"imgUrl":"../../assets/home/p1.jpg","title":"CLASSIC DIAMOND RING"},
    {"imgUrl":"../../assets/home/p2.jpg","title":"CLASSIC DIAMOND RING"},
    {"imgUrl":"../../assets/home/p3.jpg","title":"CLASSIC DIAMOND RING"},
    {"imgUrl":"../../assets/home/p4.jpg","title":"CLASSIC DIAMOND RING"},
  ]
  collections=[
    {"imgUrl":"../../assets/home/collections1.jpg","title":"COLLECTION-1"},
    {"imgUrl":"../../assets/home/collections2.jpg","title":"COLLECTION-2"},
    {"imgUrl":"../../assets/home/collections3.jpg","title":"COLLECTION-3"},
    {"imgUrl":"../../assets/home/collections4.jpg","title":"COLLECTION-4"},
  ]
  why=[
    {"imgUrl":"../../assets/home/icon1.png","title":"EXCELLENT QUALITY"},
    {"imgUrl":"../../assets/home/icon2.png","title":"100% Certified Jewellery"},
    {"imgUrl":"../../assets/home/icon3.png","title":"30 Money Back Guarantee"},
    {"imgUrl":"../../assets/home/icon4.png","title":"Life Time Exchange & BuyBack"},
    {"imgUrl":"../../assets/home/icon5.png","title":"Free One Year Insurance"},
    {"imgUrl":"../../assets/home/icon6.png","title":"Free Shipping"},
  ]
}
