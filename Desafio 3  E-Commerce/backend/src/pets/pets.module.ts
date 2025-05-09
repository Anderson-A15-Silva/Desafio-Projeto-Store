import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { Pet } from 'src/entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetsService],
  controllers: [PetsController],
})
export class PetsModule {}
