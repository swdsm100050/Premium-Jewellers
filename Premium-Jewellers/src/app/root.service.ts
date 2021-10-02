import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  url="../assets/data/root.json"
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.url);
  }
}
