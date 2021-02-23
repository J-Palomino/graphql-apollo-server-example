import { ApolloServer } from "apollo-server";
import schema from "./schema";
import buildContext from "./context";

export const getTestServer = () => {
  const { createTestClient } = require("apollo-server-testing");
  const { buildTestContext } = require("./context");
  return createTestClient(
    new ApolloServer({ schema, context: buildTestContext })
  );
};

export default new ApolloServer({ schema, context: buildContext });
