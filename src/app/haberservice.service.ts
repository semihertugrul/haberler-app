import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HaberserviceService {

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
  }

  getHaber() {
    return this.http.get('http://arabam.getsandbox.com/news');
  }

  getHaberDetay(haberId) {
    return this.http.get('http://arabam.getsandbox.com/news/' + haberId);
  }
}
