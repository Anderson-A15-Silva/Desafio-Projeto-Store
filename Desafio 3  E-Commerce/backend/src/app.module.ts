import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsModule } from './products/products.module';
import { Pet } from './entities/pet.entity';
import { PetsModule } from './pets/pets.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './data/db.sqlite',
      entities: [Product, Pet],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),    
    ProductsModule,
    PetsModule,
    ConfigModule
  ],
})
export class AppModule {}
