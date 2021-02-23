import { QueryResolvers } from "@types";

const Query: QueryResolvers = {
  books: (parent, args, context) => context.models.books.getBooks(),
};

const Mutation = {};

export default { Query, Mutation };
