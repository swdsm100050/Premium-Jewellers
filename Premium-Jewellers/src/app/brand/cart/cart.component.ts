import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  productCart = [
    {
      img: '../../../assets/user/product-detail/ring.jpg',
      title: 'dewdrop star diamond pendant',
      code: 'fdfd213145',
      descs: [
        { attr: 'ring size', val: '14' },
        { attr: 'ring size', val: '14' },
        { attr: 'ring size', val: '14' },
      ],
      quantity: '0',
      total: '14000',
    },
    {
      img: '../../../assets/user/product-detail/ring.jpg',
      title: 'dewdrop star diamond pendant',
      code: 'fdfd213145',
      descs: [
        { attr: 'ring size', val: '14' },
        { attr: 'ring size', val: '14' },
        { attr: 'ring size', val: '14' },
      ],
      quantity: '0',
      total: '14000',
    },
    {
      img: '../../../assets/user/product-detail/ring.jpg',
      title: 'dewdrop star diamond pendant',
      code: 'fdfd213145',
      descs: [
        { attr: 'ring size', val: '14' },
        { attr: 'ring size', val: '14' },
        { attr: 'ring size', val: '14' },
      ],
      quantity: '0',
      total: '14000',
    },
  ];
}
