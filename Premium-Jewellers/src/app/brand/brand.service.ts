import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  url="../../assets/data/brand.json"
  constructor(private http:HttpClient) { }
  getUserData(){
    return this.http.get(this.url);
  };
}
