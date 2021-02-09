import { books } from "./data";

const Query: Resolvers = {
  books: () => books,
};

const Mutation = {};

export default { Query, Mutation };
