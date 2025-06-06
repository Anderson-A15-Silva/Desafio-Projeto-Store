import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.service.createNewProduct(createProductDto);
  }
}
