import { DatasourceConfig } from '@prisma/client';

export const dbConfig: DatasourceConfig = {
  adapter: process.env.DATABASE_URL, // your PostgreSQL URL
};