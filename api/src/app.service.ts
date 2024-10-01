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

  async getTamagotchis() {
    return await this.tamagotchiRepository.find({
      order: { id: 'ASC' },
    });
  }

  async getTamagotchi(id: number) {
    return await this.tamagotchiRepository.findOneBy({ id });
  }

  async createTamagotchi(tamagotchi: TamagotchiDto) {
    await this.tamagotchiRepository.save(tamagotchi);
    return await this.getTamagotchis();
  }

  async updateTamagotchi(id: number, tamagotchi: TamagotchiDto) {
    await this.tamagotchiRepository.update(id, tamagotchi);
    return await this.getTamagotchis();
  }

  async deleteTamagotchi(id: number) {
    await this.tamagotchiRepository.delete(id);
    return await this.getTamagotchis();
  }
}
