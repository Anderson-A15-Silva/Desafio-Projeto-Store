import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { Pet } from 'src/entities/pet.entity';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private service: PetsService) {}

  @Get()
  getAll(): Promise<Pet[]> {
    return this.service.findAllPets();
  }

  @Post()
  create(@Body() createPetDto: CreatePetDto): Promise<Pet> {
    if (!createPetDto.image || !createPetDto.name || !createPetDto.sku || !createPetDto.gender || !createPetDto.age || !createPetDto.size || !createPetDto.color || !createPetDto.vaccinated || !createPetDto.dewormed || !createPetDto.cert || !createPetDto.microchip || !createPetDto.location || !createPetDto.publishedDate) {
      throw new BadRequestException('Todos os campos são obrigatórios');
    }

    return this.service.createNewPet(createPetDto);
  }
}
