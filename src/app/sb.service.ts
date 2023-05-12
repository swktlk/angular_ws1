import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BOOK } from './Test-request-get';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SBService {
  BookList: any []=[]
  constructor(private http:HttpClient) { }
  getBooksWeb():Observable<BOOK[]>{
    return this.http.get<BOOK[]>('https://638492184ce192ac605bc39a.mockapi.io/Movie/')}
 
  GetBook(): BOOK[]{
    return this.BookList
  }
}
