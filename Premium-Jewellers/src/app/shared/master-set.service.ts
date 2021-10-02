import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterSetService {
  url="../../assets/data/master.json"
  constructor(private http:HttpClient) { }

  getMasterSet(){
    return this.http.get(this.url);
  };
}
