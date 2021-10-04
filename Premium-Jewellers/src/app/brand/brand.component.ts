import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
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
