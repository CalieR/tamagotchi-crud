import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get('tamagotchi')
  async getTamagotchis() {
    return await this.appService.getTamagotchis();
  }

  @Get('tamagotchi/:id')
  async getTamagotchi(@Param('id') id: number) {
    return await this.appService.getTamagotchi(id);
  }

  @Post('tamagotchi')
  async createTamagotchi(@Body() tamagotchi: TamagotchiDto) {
    return await this.appService.createTamagotchi(tamagotchi);
  }

  @Put('tamagotchi/:id')
  async updateTamagotchi(
    @Body() tamagotchi: TamagotchiDto,
    @Param('id') id: number,
  ) {
    return await this.appService.updateTamagotchi(id, tamagotchi);
  }

  @Delete('tamagotchi/:id')
  async deleteTamagotchi(@Param('id') id: number) {
    return await this.appService.deleteTamagotchi(id);
  }
}
