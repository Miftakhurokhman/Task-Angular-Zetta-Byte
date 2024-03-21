import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private apollo:Apollo) { }

  getAllSchools() {
    return this.apollo.query({
      query: gql`
      query {
        GetAllSchools (
          pagination : { limit: 20, page: 0 }
        ) {
          _id
          short_name
          long_name
          status
        }
      }
      `
    });
  }
}