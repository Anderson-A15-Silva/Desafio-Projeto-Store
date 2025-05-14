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
  ) { }

  createNewProduct(product: Partial<Product>) {
    try {
      const newProduct = this.repo.create(product);
      return this.repo.save(newProduct);
    } catch (error) {
      console.error('Error creating the product:', error);
      throw new Error('Error creating the product');
    }

  }

  async findOne(id: number): Promise<Product> {
      const product = await this.repo.findOne({ where: { id } });
      if (!product) {
        throw new Error(`Product com id ${id} não encontrado`);
      }
      return product;
    }

  async findAllProducts(filter?: FilterProductDto) {
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

      const query = this.repo.createQueryBuilder('product');

      if (name) query.andWhere('product.name LIKE :name', { name: `%${name}%` });

      if (prType) query.andWhere('product.prType IN (:...prType)', { prType });

      if (minSize !== undefined) query.andWhere('product.size >= :minSize', { minSize });
      if (maxSize !== undefined) query.andWhere('product.size <= :maxSize', { maxSize });

      if (minPrice !== undefined) query.andWhere('product.price >= :minPrice', { minPrice });
      if (maxPrice !== undefined) query.andWhere('product.price <= :maxPrice', { maxPrice });

      if (limit) query.take(limit);
      if (offset) query.skip(offset);

      const products = await query.getMany();

      console.log('Products found:', products);
      return products;
    } catch (error) {
      console.error('Error while searching for product', error);
      throw new Error(`Error while searching for product: ${error.message}`);
    }
  }
}
