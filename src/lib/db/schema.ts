import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const menus = pgTable('menus', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  price: integer('price').notNull(),
  category: text('category'),
  createdAt: timestamp('created_at').defaultNow(),
});