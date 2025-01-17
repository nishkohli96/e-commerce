import {
  pgTable,
  serial,
  text,
	boolean,
  timestamp,
	index,
} from 'drizzle-orm/pg-core';
import { dbTables } from '@/constants';

export const AddressTable = pgTable(
  dbTables.address,
  {
    id: serial('id').primaryKey(),
		user_id: text('user_id').notNull(),
    recipient_name: text('recipient_name').notNull(),
    recipient_phone: text('recipient_phone').notNull(),
    house_no: text('house_no').notNull(),
		street: text('street').notNull(),
		landmark: text('landmark'),
    city: text('city').notNull(),
		state: text('state'),
		country: text('country').notNull(),
		zip_code: text('zip_code').notNull(),
		is_default: boolean('is_default').default(false),
    created_at: timestamp('created_at').defaultNow().notNull(),
		updated_at: timestamp('updated_at').defaultNow().notNull(),
  }
);