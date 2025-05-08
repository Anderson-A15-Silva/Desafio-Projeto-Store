import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  id: number;

  @IsString()
  image: string;

  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsNumber()
  price: number;

  @IsString()
  size: string;
}
