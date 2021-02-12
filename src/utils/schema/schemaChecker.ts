/**
 * This file is used in CI to assert our committed schema and generated one are the same.
 */
import fs from "fs";
import assert from "assert";
import { printSchema } from "graphql";

import schema from "../../schema";

try {
  assert.strictEqual(
    fs.readFileSync(`schema.graphql`, { encoding: "utf8" }),
    printSchema(schema)
  );
} catch {
  console.error(
    "The committed schema does not match generated one, please run yarn schema locally and commit any changes."
  );
  process.exit(1);
}
