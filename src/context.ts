import Book from "./routes/book";
import { Viewer } from "@types";

const buildContext: any = async ({ req }: { req: any }) => {
  const userInfo: Viewer = {
    id: "fake_id",
    username: "default_username",
  };

  return {
    models: {
      books: new Book.model(userInfo),
    },
    userInfo,
  };
};

/*
 * Use this context to pass into the test ingegration server
 * */
export const buildTestContext = () => {
  const userInfo: Viewer = { id: "test_id", username: "testusername" };
  return {
    models: {
      books: new Book.model(userInfo),
    },
    userInfo,
  };
};

export default buildContext;
