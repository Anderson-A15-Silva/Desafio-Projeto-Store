import { IsString, IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
import { ProductType } from '../../common/enums/product-type.enum';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(ProductType)
  @IsNotEmpty()
  prType: ProductType;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  size: number;
}
