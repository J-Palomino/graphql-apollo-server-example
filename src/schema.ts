import { gql } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";
import fs from 'fs'
import { DocumentNode } from 'graphql'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefsRoot = gql`
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

/**
 * For each of the folders in routes dynamically import the typeDefs and resolvers
 * and build out the schema, this enforces the specified route folder structure
 */
const schema = fs.readdirSync(`${__dirname}/routes`).reduce(
    (accumulator, item) => {
      const {
        typeDefs,
        resolvers,
      } = require(`${__dirname}/routes/${item}`).default
      accumulator.typeDefs.push(typeDefs)
      accumulator.resolvers.push(resolvers)
      return accumulator
    },
    {
      typeDefs: [typeDefsRoot],
      resolvers: [],
    } as { typeDefs: DocumentNode[]; resolvers: any[] }
)

export default makeExecutableSchema(schema)
