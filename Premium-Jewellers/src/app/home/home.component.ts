import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:RootService) { }

  data:any=[];
  
  ngOnInit(){
  this.service.getData().subscribe(data => {
    this.data=data
    console.log(data)
  })
  }
  

}
