import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

export class TamagotchiDto {
  name: string;
  species: string;
  dateOfBirth: Date;
  hunger: number;
  health: number;
  happiness: number;
  energy: number;
  cleanliness: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('tamagotchi')
  async createTamagotchi(@Body() tamagotchi: TamagotchiDto) {
    return await this.appService.createTamagotchi(tamagotchi);
  }
}
