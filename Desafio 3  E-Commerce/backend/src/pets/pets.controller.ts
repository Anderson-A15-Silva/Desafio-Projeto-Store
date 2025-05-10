import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { Pet } from 'src/entities/pet.entity';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private service: PetsService) { }

  @Get()
  getAll(): Promise<Pet[]> {
    return this.service.findAllPets();
  }

  @Post()
  create(@Body() createPetDto: CreatePetDto): Promise<Pet> {
    console.log(createPetDto);

    return this.service.createNewPet(createPetDto);
  }
}
