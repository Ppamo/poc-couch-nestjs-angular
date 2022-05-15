import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './events';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  url: string=`http://localhost:3000`
  constructor(private http:HttpClient) { }

  EventAdd(data:Event):Observable<any>{
    console.log("add", data);
    return this.http.post(`${this.url}/event`,data);
  }

  EventUpdate(data:Event):Observable<any>{
    console.log("updating", data);
    return this.http.put(`${this.url}/event/${data.id}`,data);
  }

  EventList(){
    console.log("listing");
    return this.http.get(`${this.url}/event/`);
  }

  EventDelete(id:any, rev:any):Observable<any>{
    console.log("deleting", id, rev);
    return this.http.delete(`${this.url}/event/${id}/${rev}`);
  }

  EventGet(id:any):Observable<any>{
    console.log("getting", id);
    return this.http.get(`${this.url}/event/${id}`);
  }

}
