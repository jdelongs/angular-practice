import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
  //private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor( http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);

   }
}
