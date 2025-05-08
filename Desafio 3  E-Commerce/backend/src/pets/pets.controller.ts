import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from '../entities/pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  async findAllPets(): Promise<Pet[]> {
    return await this.petsService.findAll();
  }

  @Post()
  async createNewPet(@Body() createPetDto: CreatePetDto): Promise<Pet> {
    return await this.petsService.create(createPetDto);
  }

  @Get(':id')
  async findOnePet(@Param('id') id: number): Promise<Pet> {
    return this.petsService.findOne(id);
  }
}
