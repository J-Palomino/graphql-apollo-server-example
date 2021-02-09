import { gql } from "apollo-server";
import { getTestServer } from "@server";

const { query } = getTestServer();

test("Books Query returns expected results", async () => {
  const res = await query({
    query: gql`
      query {
        books {
          title
          author
        }
      }
    `,
  });
  expect(res.data.books).toMatchSnapshot();
});
