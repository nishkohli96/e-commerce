import {
  pgTable,
  serial,
  text,
	boolean,
  timestamp,
	index,
} from 'drizzle-orm/pg-core';
import { dbTables } from '@/constants';

export const VendorTable = pgTable(
  dbTables.vendor,
  {
    id: serial('id').primaryKey(),
		name: text('name').notNull().unique(),
    email: text('email').notNull(),
    phone: text('phone').notNull().unique(),
    created_at: timestamp('created_at').defaultNow().notNull(),
		updated_at: timestamp('updated_at').defaultNow().notNull(),
  }
);