import { gql } from '@apollo/client';

export const ALL_DATA = gql`
query Query {
    allData {
      name
      message
      email
    }
  }
`;