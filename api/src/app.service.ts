import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tamagotchi } from './tamagotchi.entity';
import { TamagotchiDto } from './app.controller';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Tamagotchi)
    private tamagotchiRepository: Repository<Tamagotchi>,
  ) {}

  getHello(): string {
    return 'Hello World!!!!';
  }

  async createTamagotchi(tamagotchi: TamagotchiDto) {
    return await this.tamagotchiRepository.save(tamagotchi);
  }
}
