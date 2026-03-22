import { betterAuth } from 'better-auth';
import { pgAdapter } from '@better-auth/adapters/pg';
import { pool } from './db';

export const auth = betterAuth({
  database: pgAdapter(pool),
  emailAndPassword: {
    enabled: true,
  },
});
