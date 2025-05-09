import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.service.findAllProducts();
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.service.createNewProduct(createProductDto);
  }
}
