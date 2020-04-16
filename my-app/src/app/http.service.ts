import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

  getSoccerFeed() {
    let httpHeaders = new HttpHeaders().set(
      'X-RapidAPI-Key',
      '32f0258591mshadbb61403ae7812p1db709jsnf10b5a111a1a'
    );

    return this.http.get(
      'https://free-football-soccer-videos.p.rapidapi.com/',
      {
        headers: httpHeaders,
      }
    );
  }
}
