import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-jewellery-collection',
  templateUrl: './jewellery-collection.component.html',
  styleUrls: ['./jewellery-collection.component.css']
})
export class JewelleryCollectionComponent implements OnInit {

  constructor(private http:HttpClient) { }
  loved:any=[]
  async getLoved(){
    let response=await this.http.get<any>("../assets/data/jewellery-collection/loved.json").toPromise()
    this.loved=response
  }
  popular:any=[]
  async getPopular(){
    let response=await this.http.get<any>("../assets/data/jewellery-collection/popular.json").toPromise()
    this.popular=response
  }


  ngOnInit(): void {
    this.getLoved()
    this.getPopular()
  }

  slides=[
    {"btn1":"ziva collection","btn2":"evil eye"},
    {"btn1":"ginni","btn2":"everlite"},
    {"btn1":"switch","btn2":"sunehri lees"},
    {"btn1":"blush","btn2":"love knot"},
    {"btn1":"kids","btn2":"fleur edition"},
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
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
