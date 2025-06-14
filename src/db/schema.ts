import { boolean, mysqlTable, serial, text, timestamp } from "drizzle-orm/mysql-core";

export const todos = mysqlTable("todos", {
  id: serial("id").primaryKey(),
  status: boolean("status").notNull().default(false),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
