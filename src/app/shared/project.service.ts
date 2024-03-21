import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YourService {

  constructor(private http: HttpClient) { }

  getAllPromos(): Observable<any> {
    const query = `
      query {
        GetAllPromos (
          pagination: {
            limit: 10
            page: 0
          }
        ) {
          _id
          image_url
          description
          sub_title
          title
          ref
        }
      }
    `;

    return this.http.post<any>('https://api.v2.zetta-demo.space/graphql', { query });
  }
}
