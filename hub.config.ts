
import { defineCollection, defineHub } from "honohub";
import * as schema from "./src/db/schema";

import { drizzle } from 'drizzle-orm/tidb-serverless';

const db = drizzle({ connection: { url: process.env.TIDB_URL }});

export default defineHub({
  db,
  collections: [
    defineCollection({
      slug: "todos",
      schema: schema.todos,
    }),
  ],
});
