import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tamagotchi } from './tamagotchi.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'tamagotchi-crud',
      entities: [Tamagotchi],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Tamagotchi]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
