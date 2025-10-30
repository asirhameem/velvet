import { join } from 'path';
import { DataSource } from 'typeorm';
import config from './config';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: config.db.host,
  port: config.app.port,
  database: config.db.database,
  username: config.db.username,
  password: config.db.password,
  entities: [join(__dirname, '../entities/**.entity{.ts,.js}')],
  migrations: [join(__dirname, '../migrations/**/*{.ts,.js}')],
  migrationsRun: false,
  synchronize: false,
});

export default AppDataSource;
