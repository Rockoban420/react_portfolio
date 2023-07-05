const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Info2 {
    _id: ID
    contactname: String
    contactemail: String
    contactmessage: String
  }

  type Query {
    allData: [Info2]!
  }

  type Mutation {
    addData2(contactname: String!, contactemail: String!, contactmessage: String!): Info2
  }
`;

module.exports = typeDefs;
