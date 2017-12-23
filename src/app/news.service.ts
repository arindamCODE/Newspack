import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  constructor(private http: Http) {
      
   }

  search(query: string) {
    return this.http.get('https://newsapi.org/v1/sources?language=en&apiKey=3c6f68c69e42480eab51da2a642d4f0f').map(response => response.json());

  }

}
