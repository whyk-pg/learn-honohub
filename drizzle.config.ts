import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    // biome-ignore lint/style/noNonNullAssertion: 設定上は確実に存在するため
    url: process.env.TIDB_URL!,
  },
});
