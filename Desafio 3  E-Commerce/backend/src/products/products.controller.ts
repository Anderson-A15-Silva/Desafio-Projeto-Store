import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAllProducts(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return await this.productsService.create(createProductDto);
  }

  @Get(':id')
  async findOneProduct(@Param('id') id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }
}
