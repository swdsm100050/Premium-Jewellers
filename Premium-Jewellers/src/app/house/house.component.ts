import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customers=[
    {"comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","name":"altaf shaikh"},
    {"comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","name":"makdoom shaikh"},
    {"comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","name":"rilesh sharma"},
    {"comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","name":"sagar khairre"},
    {"comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur perspiciatis unde corrupti aut alias maxime at molestiae. Nulla voluptatum vel aut ipsa earum eveniet vero repellendus esse minus alias.","name":"annu shukla"},
  ]
  delivery=[
    {"icon":"bi bi-phone","title":"pick your favourite designs online","text":"add minimum 10 design"},
    {"icon":"bi bi-calendar3","title":"pick your favourite designs online","text":"add minimum 10 design"},
    {"icon":"bi bi-people","title":"pick your favourite designs online","text":"add minimum 10 design"},
    {"icon":"bi bi-bag-check","title":"pick your favourite designs online","text":"add minimum 10 design"},
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<strong><i class="bi bi-chevron-left"></i><strong>', '<strong><i class="bi bi-chevron-right"></i><strong>'],
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
