import { QueryResolvers } from "@gqlgen";
import { books } from "./data";

const Query: QueryResolvers = {
  books: () => books,
};

const Mutation = {};

export default { Query, Mutation };
