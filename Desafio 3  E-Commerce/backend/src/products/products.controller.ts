import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) { }

  @Get()
  getAll(@Query() filter: FilterProductDto): Promise<Product[]> {
    return this.service.findAllProducts(filter);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.service.createNewProduct(createProductDto);
  }
}
