import { gql } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";
import Book from "./routes/books";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Query {
    "dummy value required for schema merging"
    _: String
  }

  type Mutation {
    "dummy value required for schema merging"
    _: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, Book.typeDefs],
  resolvers: [Book.resolvers],
});

export default schema;
