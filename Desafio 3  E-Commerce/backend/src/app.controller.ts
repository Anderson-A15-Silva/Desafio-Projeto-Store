import { Controller, Get } from '@nestjs/common';
import { PetsController } from './pets/pets.controller';
import { ProductsController } from './products/products.controller';
import { FormsController } from './forms/form.controller';

@Controller()
export class AppController {
  constructor(
    private readonly petsController: PetsController,
    private readonly productsController: ProductsController,
    private readonly formsControlller: FormsController
  ) {}

  @Get('health-check')
  getHealthCheck() {
    return { status: 'OK' };
  }

  getHello(){
    return "Hello World";
  }
}
