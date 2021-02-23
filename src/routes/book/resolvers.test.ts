import resolvers from "./resolvers";
import { books } from "./data";

test("Books Query returns expected results", () => {
  expect(resolvers.Query.books(null, {}, {}, null)).toStrictEqual(books);
});
