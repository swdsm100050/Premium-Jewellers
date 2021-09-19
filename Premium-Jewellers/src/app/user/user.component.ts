import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isSticky = false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('document:scroll')
  scrollFunction() {
    document.body.scrollTop > 60 || document.documentElement.scrollTop > 60
      ? (this.isSticky = true)
      : (this.isSticky = false);
  }
}
