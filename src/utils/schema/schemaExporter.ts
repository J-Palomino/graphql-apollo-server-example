import fs from "fs";
import { printSchema } from "graphql";
import schema from "../../schema";

fs.writeFileSync(`schema.graphql`, printSchema(schema));
