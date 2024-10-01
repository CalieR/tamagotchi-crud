import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tamagotchi } from './tamagotchi.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'calierushton',
      password: '',
      database: 'tamagotchi-crud',
      entities: [Tamagotchi],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Tamagotchi]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
