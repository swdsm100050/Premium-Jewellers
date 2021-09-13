import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-jewellery-collection',
  templateUrl: './jewellery-collection.component.html',
  styleUrls: ['./jewellery-collection.component.css']
})
export class JewelleryCollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loved=[
    {"imgUrl":"../../assets/jewellery-collection/loved1.png","title":"forever love collection","shortDesc":"why wait for the perfect moment?"},
    {"imgUrl":"../../assets/jewellery-collection/loved2.png","title":"switch","shortDesc":"fashion for the fickle minded!"},
    {"imgUrl":"../../assets/jewellery-collection/loved3.png","title":"miracle plate collection","shortDesc":"seeing is believing."},
  ]
  popular=[
    {"imgUrl":"../../assets/jewellery-collection/popular1.png","title":"forever love collection","shortDesc":"why wait for the perfect moment?"},
    {"imgUrl":"../../assets/jewellery-collection/popular2.png","title":"switch","shortDesc":"fashion for the fickle minded!"},
    {"imgUrl":"../../assets/jewellery-collection/popular3.png","title":"miracle plate collection","shortDesc":"seeing is believing."},
    {"imgUrl":"../../assets/jewellery-collection/popular4.png","title":"forever love collection","shortDesc":"why wait for the perfect moment?"},
    {"imgUrl":"../../assets/jewellery-collection/popular5.png","title":"switch","shortDesc":"fashion for the fickle minded!"},
    {"imgUrl":"../../assets/jewellery-collection/popular6.png","title":"miracle plate collection","shortDesc":"seeing is believing."},
    {"imgUrl":"../../assets/jewellery-collection/popular7.png","title":"forever love collection","shortDesc":"why wait for the perfect moment?"},
    {"imgUrl":"../../assets/jewellery-collection/popular8.png","title":"switch","shortDesc":"fashion for the fickle minded!"},
    {"imgUrl":"../../assets/jewellery-collection/popular9.png","title":"miracle plate collection","shortDesc":"seeing is believing."},
    {"imgUrl":"../../assets/jewellery-collection/popular10.png","title":"forever love collection","shortDesc":"why wait for the perfect moment?"},
    {"imgUrl":"../../assets/jewellery-collection/popular11.png","title":"switch","shortDesc":"fashion for the fickle minded!"},
    {"imgUrl":"../../assets/jewellery-collection/popular12.png","title":"miracle plate collection","shortDesc":"seeing is believing."},
  ]
  slides=[
    {"btn1":"ziva collection","btn2":"evil eye"},
    {"btn1":"ginni","btn2":"everlite"},
    {"btn1":"switch","btn2":"sunehri lees"},
    {"btn1":"blush","btn2":"love knot"},
    {"btn1":"kids","btn2":"fleur edition"},
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
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
