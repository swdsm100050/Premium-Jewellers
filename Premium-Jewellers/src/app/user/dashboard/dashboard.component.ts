import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient){}
  features:any=[]
  products:any=[];
  cards:any=[]
  private url="../../assets/data/user/carousal-product.json";
  async getProducts(){
    let response = await this.http.get<any>(this.url).toPromise()
    this.products=response
    console.log(response)
  }
  async getFeatures(){
    let response=await this.http.get<any>("../../assets/data/user/features.json").toPromise()
    this.features=response
  }
  async getCards(){
    let response=await this.http.get<any>("../../assets/data/user/cards.json").toPromise()
    this.cards=response
  }
  ngOnInit(){
    this.getProducts()
    this.getFeatures()
    this.getCards()
  }
  customers=[
    {"comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","name":"altaf shaikh"},
    {"comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","name":"makdoom shaikh"},
    {"comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","name":"rilesh sharma"},
    {"comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","name":"sagar khairre"},
    {"comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","name":"annu shukla"},
  ]
  clients=[
    {"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","position":"seo of dsm","name":"altaf shaikh"},
    {"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","position":"seo of dsm","name":"makdoom shaikh"},
    {"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","position":"seo of dsm","name":"rilesh sharma"},
    {"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","position":"seo of dsm","name":"sagar khairre"},
    {"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","position":"seo of dsm","name":"annu shukla"},
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
      350: {
        items: 2
      },
      700: {
        items: 3
      },
      900: {
        items: 4
      }
    },
    nav: true
  }
  client: OwlOptions = {
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
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
