import { Controller, Get } from '@nestjs/common';
import { PetsController } from './pets/pets.controller';
import { ProductsController } from './products/products.controller';

@Controller()
export class AppController {
  constructor(
    private readonly petsController: PetsController,
    private readonly productsController: ProductsController,
  ) {}

  @Get('health-check')
  getHealthCheck() {
    return { status: 'OK' };
  }
}
