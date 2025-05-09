import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from 'src/entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private repo: Repository<Pet>,
  ) {}

  createNewPet(pet: Partial<Pet>) {
    try {
      const newPet = this.repo.create(pet);
      return this.repo.save(newPet);
    } catch (error) {
      console.error('Erro ao criar pet:', error);
      throw new Error('Erro ao criar pet');
    }
  }

  findAllPets() {
    try {
      return this.repo.find();
    } catch (error) {
      console.error('Erro ao procurar pets:', error);
      throw new Error('Erro ao procurar pet');
    }
  }
}
