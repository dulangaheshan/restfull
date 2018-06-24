import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelDataServiceService {

  constructor(private http : HttpClient) { }
 /* send get request and return its response data */
  getHotelData(){
    return this
              .http
              .get(' https://my-json-server.typicode.com/dulangaheshan/restfull/markers') 
  }
}
