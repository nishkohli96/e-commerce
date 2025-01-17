import { defineConfig } from 'drizzle-kit';
import '@/db/envConfig';

export default defineConfig({
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
});