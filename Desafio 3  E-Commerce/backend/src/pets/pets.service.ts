import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { Pet } from '../entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    return this.prisma.pets.create({
      data: createPetDto,
    });
  }

  async findAll(): Promise<Pet[]> {
    return this.prisma.pets.findMany();
  }

  async findOne(id: number): Promise<Pet> {
    return this.prisma.pets.findUnique({
      where: { id },
    });
  }
}
