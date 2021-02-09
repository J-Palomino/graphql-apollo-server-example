import { ApolloServer } from "apollo-server";
import schema from "./schema";

export const getTestServer = () => {
  const { createTestClient } = require("apollo-server-testing");
  return createTestClient(new ApolloServer({ schema }));
};

export default new ApolloServer({ schema });
