import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { FilterProductDto } from './dto/filter-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>,
  ) {}

  createNewProduct(product: Partial<Product>) {
    try {
      const newProduct = this.repo.create(product);
      return this.repo.save(newProduct);
    } catch (error) {
      console.error('Error creating the product:', error);
      throw new Error('Error creating the product');
    }
    
  }

  async findAllPets(filter?: FilterProductDto) {
      try {
        const {
          limit,
          offset,
          name,
          prType,
          minPrice,
          maxPrice,
          minSize,
          maxSize
        } = filter || {};
  
        console.log('Filters received:', filter); 
  
        const query = this.repo.createQueryBuilder('pet');
  
        if (name) query.andWhere('pet.name LIKE :name', { name: `%${name}%` });
  
        if (prType) query.andWhere('pet.type = :peType', { prType }); 
        
        if (minSize !== undefined) query.andWhere('pet.size >= :minSize', { minSize });
        if (maxSize !== undefined) query.andWhere('pet.size <= :maxSize', { maxSize });
  
        if (minPrice !== undefined) query.andWhere('pet.price >= :minPrice', { minPrice });
        if (maxPrice !== undefined) query.andWhere('pet.price <= :maxPrice', { maxPrice });
  
        if (limit) query.take(limit);
        if (offset) query.skip(offset);
  
        const pets = await query.getMany();
  
        console.log('Products found:', pets);
        return pets;
      } catch (error) {
        console.error('Error while searching for product', error); 
        throw new Error(`Error while searching for product: ${error.message}`); 
      }
    }
}
