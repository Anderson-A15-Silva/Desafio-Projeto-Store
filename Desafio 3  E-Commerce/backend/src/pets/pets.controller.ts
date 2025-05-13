import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { Pet } from 'src/entities/pet.entity';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { FilterPetDto } from './dto/filter-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private service: PetsService) {}

  @Get()
  getAll(@Query() filter: FilterPetDto): Promise<Pet[]> {
    return this.service.findAllPets(filter);
  }

  @Post()
  async createPet(
    @Body() createPetDto: CreatePetDto,
  ): Promise<Pet> {
    if (!createPetDto.image) {
      throw new BadRequestException('The pet image is necessary.');
    }

    const petData = {
      ...createPetDto,
      image: createPetDto.image,
    };

    const createdPet = await this.service.createNewPet(petData);

    return {
      ...createdPet,
      image: `${process.env.API_URL || 'http://localhost:3025'}/uploads/${createdPet.image}`,
    };
  }
}
