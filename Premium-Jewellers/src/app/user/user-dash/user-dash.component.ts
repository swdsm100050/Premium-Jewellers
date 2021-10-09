import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
eye1: boolean;
eye2: boolean;


toggleEye1() {
  this.eye1 = !this.eye1;
}
toggleEye2() {
  this.eye2 = !this.eye2;
}

}
