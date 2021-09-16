import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides=[
    {"svg_url":"../../../assets/user/dashboard/feature1.svg","title":"excellent jewellery quility"},
    {"svg_url":"../../../assets/user/dashboard/feature2.svg","title":"excellent jewellery quility"},
    {"svg_url":"../../../assets/user/dashboard/feature3.svg","title":"excellent jewellery quility"},
    {"svg_url":"../../../assets/user/dashboard/feature4.svg","title":"excellent jewellery quility"},
    {"svg_url":"../../../assets/user/dashboard/feature5.svg","title":"excellent jewellery quility"},
    {"svg_url":"../../../assets/user/dashboard/feature6.svg","title":"excellent jewellery quility"},
    {"svg_url":"../../../assets/user/dashboard/feature7.svg","title":"excellent jewellery quility"},
    {"svg_url":"../../../assets/user/dashboard/feature8.svg","title":"excellent jewellery quility"},
  ]
  cards=[
    {"title":"engagement","col":"col-md-4","img":"../../../assets/user/dashboard/category1.png","brand_img":"../../../assets/user/dashboard/category-icon1.svg"},
    {"title":"engagement","col":"col-md-8","img":"../../../assets/user/dashboard/category2.png","brand_img":"../../../assets/user/dashboard/category-icon2.svg"},
    {"title":"engagement","col":"col-md-4","img":"../../../assets/user/dashboard/category3.png","brand_img":"../../../assets/user/dashboard/category-icon3.svg"},
    {"title":"engagement","col":"col-md-4","img":"../../../assets/user/dashboard/category4.png","brand_img":"../../../assets/user/dashboard/category-icon4.svg"},
    {"title":"engagement","col":"col-md-4","img":"../../../assets/user/dashboard/category5.png","brand_img":"../../../assets/user/dashboard/category-icon5.svg"},
  ]
  products=[
    {"svg_url":"../../../assets/user/dashboard/category5.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"svg_url":"../../../assets/user/dashboard/category5.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"svg_url":"../../../assets/user/dashboard/category5.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"svg_url":"../../../assets/user/dashboard/category5.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"svg_url":"../../../assets/user/dashboard/category5.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"svg_url":"../../../assets/user/dashboard/category5.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"svg_url":"../../../assets/user/dashboard/category5.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
    {"svg_url":"../../../assets/user/dashboard/category5.png","title":"pauletta glo diamond ring","mrp":"140000","discount":"4000"},
  ]
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
