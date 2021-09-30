import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  selected:any=[];
  async getSelected(){
    let response = await this.http.get<any>("../assets/data/home/selected.json").toPromise();
    this.selected=response
  }
  collections:any=[];
  async getCollections(){
    let response = await this.http.get<any>("../assets/data/home/collections.json").toPromise();
    this.collections=response
  }
  why:any=[];
  async getWhy(){
    let response = await this.http.get<any>("../assets/data/home/why.json").toPromise();
    this.why=response
  }
  ngOnInit(){
    this.getSelected()
    this.getCollections()
    this.getWhy()
  }
  

}
