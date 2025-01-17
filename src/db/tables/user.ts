import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { dbTables } from '@/constants';

export const UserTable = pgTable(
  dbTables.user,
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    avatar: text('avatar').notNull(),
    created_at: timestamp('created_at').defaultNow().notNull(),
		updated_at: timestamp('updated_at').defaultNow().notNull(),
  },
  (users) => {
    return {
      userEmailIdx: uniqueIndex('user_email_idx').on(users.email),
    };
  },
);