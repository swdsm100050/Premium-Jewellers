import { Component, OnInit } from '@angular/core';
import { MasterSetService } from '../../master-set.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private service:MasterSetService) {}
  masterSet:any=[];
  ngOnInit(){
    this.service.getMasterSet().subscribe(data => this.masterSet=data);
  };
}
