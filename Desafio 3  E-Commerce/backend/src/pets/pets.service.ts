import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from 'src/entities/pet.entity';
import { FilterPetDto } from './dto/filter-pet.dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private repo: Repository<Pet>,
  ) { }

  createNewPet(pet: Partial<Pet>) {
    try {
      const newPet = this.repo.create(pet);
      return this.repo.save(newPet);
    } catch (error) {
      console.error('Error creating the pet:', error);
      throw new Error('Error creating the pet');
    }
  }

  async findOne(id: number): Promise<Pet> {
    const pet = await this.repo.findOne({ where: { id } });
    if (!pet) {
      throw new Error(`Pet com id ${id} não encontrado`);
    }
    return pet;
  }

  async findAllPets(filter?: FilterPetDto) {
    try {
      const {
        limit,
        offset,
        name,
        age,
        color,
        size,
        peType,
        minPrice,
        maxPrice,
        gender,
      } = filter || {};

      console.log('Filters received:', filter); 

      const query = this.repo.createQueryBuilder('pet');

      if (name) query.andWhere('pet.name LIKE :name', { name: `%${name}%` });
      if (age !== undefined) query.andWhere('pet.age = :age', { age });
      if (color) {
        if (Array.isArray(color)) {
          query.andWhere('pet.color IN (:...color)', { color });
        } else {
          query.andWhere('pet.color = :color', { color }); 
        }
      }

      if (size) {
        if (Array.isArray(size)) {
          query.andWhere('pet.size IN (:...size)', { size });
        } else {
          query.andWhere('pet.size = :size', { size });
        }
      }

      if (peType) query.andWhere('pet.type = :peType', { peType }); 
      if (gender) {
        if (Array.isArray(gender)) {
          query.andWhere('pet.gender IN (:...gender)', { gender });
        } else {
          query.andWhere('pet.gender = :gender', { gender });
        }
      }

      if (minPrice !== undefined) query.andWhere('pet.price >= :minPrice', { minPrice });
      if (maxPrice !== undefined) query.andWhere('pet.price <= :maxPrice', { maxPrice });

      if (limit) query.take(limit);
      if (offset) query.skip(offset);

      const pets = await query.getMany();

      console.log('Pets found:', pets);
      return pets;
    } catch (error) {
      console.error('Error while searching for pet', error); 
      throw new Error(`Error while searching for pet: ${error.message}`); 
    }
  }
}
