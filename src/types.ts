import { QueryResolvers as BaseQueryResolvers } from "@gqlgen";

export interface Viewer {
  id: string;
  username: string;
}

interface Context {
  userInfo: Viewer;
  models: {
    books: import("./routes/book/model").default;
  };
}

export type QueryResolvers = BaseQueryResolvers<Context>;
