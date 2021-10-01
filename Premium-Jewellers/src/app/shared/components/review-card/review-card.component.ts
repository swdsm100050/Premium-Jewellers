import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {
@Input() review:any;
// @Input() pstar:any;
pstar=["fa fa-star","fa fa-star","fa fa-star","fa fa-star","fa fa-star",]
  constructor() { }

  ngOnInit(): void {
  }

}
