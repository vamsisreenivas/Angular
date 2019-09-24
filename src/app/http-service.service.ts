import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService  {

  constructor(private refHttpClient:HttpClient) {
    this.refHttpClient.get('')
   }
}
