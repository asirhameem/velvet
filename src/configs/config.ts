import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  APP_NAME: z.string(),
  PORT: z.string(),

  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),

  ADMINER_PORT: z.string(),

  ENCRYPTION_KEY: z.string(),
  ENCRYPTION_IV: z.string(),
  JWT_SECRET: z.string(),
  JWT_ACCESS_TOKEN_EXPIRE_MINUTES: z.string(),
  JWT_REFRESH_TOKEN_EXPIRE_DAYS: z.string(),

  DISPLAY_SWAGGER: z.string(),
  DISPLAY_REDOC: z.string(),
  LOG_LEVEL: z.enum(['info', 'error', 'warn', 'debug']),
});

const validatedEnv = envSchema.parse(process.env);

const config = {
  app: {
    name: validatedEnv.APP_NAME,
    port: Number(validatedEnv.PORT),
  },
  db: {
    host: validatedEnv.DB_HOST,
    port: Number(validatedEnv.DB_PORT),
    username: validatedEnv.DB_USERNAME,
    password: validatedEnv.DB_PASSWORD,
    database: validatedEnv.DB_DATABASE,
  },
  adminer: {
    port: Number(validatedEnv.ADMINER_PORT),
  },
  encryption: {
    key: validatedEnv.ENCRYPTION_KEY,
    iv: validatedEnv.ENCRYPTION_IV,
  },
  jwt: {
    secret: validatedEnv.JWT_SECRET,
    accessTokenExpiresIn: Number(validatedEnv.JWT_ACCESS_TOKEN_EXPIRE_MINUTES),
    refreshTokenExpiresIn: Number(validatedEnv.JWT_REFRESH_TOKEN_EXPIRE_DAYS),
  },
  log: {
    level: validatedEnv.LOG_LEVEL,
  },
  documentation: {
    displaySwagger: Boolean(validatedEnv.DISPLAY_SWAGGER),
    displayRedoc: Boolean(validatedEnv.DISPLAY_REDOC),
  },
};

export default config;
