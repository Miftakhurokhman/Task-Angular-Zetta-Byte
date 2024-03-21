import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private apollo: Apollo) { }

  getAllPromo():Observable<any> {
    return this.apollo.query({
      query: gql`
      query {
        GetAllPromos (
        pagination : { limit: 10, page: 0 }
      ) {
          _id
          image_url
          description
          sub_title
          title
          ref
        }
      }
      `
    });
  }

  getOnePromo(id: string):Observable<any> {
    return this.apollo.query({
      query: gql`
      query GetOnePromo($id: ID!) {
        GetOnePromo (
        _id: $id,
      ) {
          title
          sub_title
          ref
          description
        }
      }
      `,
      variables : {
        id : id
      }
    });
  }
  

  updatePromo(id: string, value: any):Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdatePromo($id: ID!, $title: String, $sub_title: String, $ref: String, $description: String) {
          UpdatePromo(
            _id: $id,
            promo_input: {
              title: $title,
              sub_title: $sub_title,
              ref: $ref,
              description: $description
            }
          ) {
            _id
            ref
            title
            sub_title
            description
          }
        }
      `,
      variables: {
        id: id,
        title: value.title,
        ref: value.ref,
        sub_title: value.sub_title,
        description: value.description
      }
    });
  }

  createPromo(payload: any){
    console.log("payload : ",payload);
    return this.apollo.mutate({
      mutation: gql`
      mutation CreatePromo($title: String, $ref: String, $sub_title: String, $description: String) {
        CreatePromo (
        promo_input: {
          title: $title,
          ref: $ref,
          sub_title: $sub_title
          description: $description
        }
      ) {
          title
          sub_title
    			ref
    			description
        }
      }
      `,
      variables: {
        title: payload.title,
        sub_title: payload.sub_title,
        ref : payload.ref,
        description: payload.description
      }
    })
  }

  deletePromo(id: String):Observable<any> {
    console.log(id);
    return this.apollo.mutate({
      mutation: gql`
      mutation DeletePromo($id: ID!) {
        DeletePromo(
        _id : $id
        ) {
   			 title 
        }
      }
      `,
      variables : {
        id : id
      }
    })
  }
}
