import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

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
      console.error('Erro ao criar produto:', error);
      throw new Error('Erro ao criar produto');
    }
    
  }

  findAllProducts() {
    try {
      return this.repo.find();
    } catch (error) {
      console.error('Erro ao procurar produtos:', error);
      throw new Error('Erro ao procurar produto');
    }
  }
}
