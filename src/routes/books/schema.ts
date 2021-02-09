import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    books: [Book]
  }

  type Book {
    title: String
    author: String
  }
`;

export default typeDefs;
