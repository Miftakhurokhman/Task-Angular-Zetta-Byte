import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo:Apollo) { }

  getAllUsers(lastName: string): Observable<any> {
    return this.apollo.query({
      query: gql`
      query($lastName: String!) {
        GetAllUsers(
          last_name: $lastName,
          pagination: {limit: 10, page: 0}
        ) {
          _id
          first_name
          last_name
        }
      }
      `,
      variables: {
        lastName: lastName
      }
    });
  }
}
