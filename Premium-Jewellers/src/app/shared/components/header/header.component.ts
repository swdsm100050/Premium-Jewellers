import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
