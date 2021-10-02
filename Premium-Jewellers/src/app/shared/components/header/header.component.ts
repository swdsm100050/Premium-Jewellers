import { Component, HostListener, OnInit } from '@angular/core';
import { MasterSetService } from '../../master-set.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isSticky = false;
  @HostListener('document:scroll')
  scrollFunction() {
    document.body.scrollTop > 60 || document.documentElement.scrollTop > 60
      ? (this.isSticky = true)
      : (this.isSticky = false);
  }
  constructor(private service:MasterSetService) {}
  masterSet:any=[];
  ngOnInit(){
    this.service.getMasterSet().subscribe(data => this.masterSet=data);
  };
  
  //   jewellery=[
  //     {"rows":[
  //             {"cols":[{"name":"titles"},"links","links","links","links","links","links","links","links","links","links"]},
  //             {"cols":["titles","links","links","links","links","links","links","links","links","links","links"]},
  //           ]
  //     },
  //     {"rows":[
  //       {"cols":["titles","links","links","links","links","links","links","links","links","links","links"]},
  //       {"cols":["titles","links","links","links","links","links","links","links","links","links","links"]},
  //     ]
  // },
  //   ]
}
