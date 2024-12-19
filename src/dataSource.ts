import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql', // atau 'postgres', 'sqlite', dll.
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'menu_management_system',
  entities: [__dirname + '/domain/entities/*.entity{.ts,.js}'], // Path entitas
  migrations: [__dirname + '/migrations/*{.ts,.js}'], // Path migrasi
  synchronize: process.env.NODE_ENV !== 'production', // Nonaktifkan untuk production
  logging: true, // Aktifkan jika ingin melihat log query
  extra: {
    authPlugin: 'mysql_native_password', // Atur plugin autentikasi
  },
});

export default AppDataSource;
