import { gql } from '@apollo/client';

export const ADD_DATA = gql`
mutation Mutation($contactname: String!, $contactemail: String!, $contactmessage: String!) {
  addData2(contactname: $contactname, contactemail: $contactemail, contactmessage: $contactmessage) {
    contactname
    contactemail
    contactmessage
  }
}
`;