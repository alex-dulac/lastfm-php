import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EncyclopediaService {

  baseUrl = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  getArtist(name: string): Observable<any> {
    let params = new HttpParams();

    params = params.set('name', name);

    return this.http.get<any>(this.baseUrl + '/Lastfm/getArtist', {params: params});
  }

  getTesting(): Observable<any> {
    let params = new HttpParams();

    return this.http.get<any>(this.baseUrl + '/Lastfm/testing', { params: params });
  }
}
