import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './infrastructure/modules/menu/menu.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Memastikan file .env tersedia di seluruh aplikasi
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'menu_management_system',
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
    }),

    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
