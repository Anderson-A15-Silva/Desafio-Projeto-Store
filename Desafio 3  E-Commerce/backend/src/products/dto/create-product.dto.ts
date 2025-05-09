import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsNotEmpty()
  size: string;
}
