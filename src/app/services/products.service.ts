import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private api = 'https://www.googleapis.com/customsearch/v1?cx=011032761026597099722:iq28kyyzbes'; // URL to web api
  private key = 'AIzaSyD3nqOo_Dpvc-tCxrilCNN7dckdcZCSaFs';

  constructor(
    private http: HttpClient
    ) { }

    getProducts(query: string, page: number): Observable<any[]> {
      let url = this.api;
      url += `&key=${this.key}`;
      url += `&q=${encodeURI(query)}`;
      if ( page > 1 ) {
        url += `&start=${page}`;
      }
       // console.log(url);
      return this.http.get<any>(url);
    }
}
