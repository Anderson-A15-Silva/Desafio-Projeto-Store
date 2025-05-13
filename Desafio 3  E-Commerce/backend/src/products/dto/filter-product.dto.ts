import { Transform, Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, Min, ValidateIf } from 'class-validator';
import { ProductType } from 'src/common/enums/product-type.enum';

export class FilterProductDto {
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Type(() => Number)
  limit?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset?: number;

  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEnum(ProductType, { each: true })
  @Transform(({ value }) => typeof value === 'string' ? value.split(',') : value)
  prType?: ProductType[];

  @Type(() => Number)
  @IsOptional()
  @Min(0)
  @IsNumber()
  minPrice?: number;

  @Type(() => Number)
  @IsOptional()
  @Min(0)
  @IsNumber()
  maxPrice?: number;

  @Type(() => Number)
  @IsOptional()
  @Min(0)
  @IsNumber()
  minSize?: number;

  @Type(() => Number)
  @IsOptional()
  @Min(0)
  @IsNumber()
  maxSize?: number;

  @ValidateIf((o) => o.minPrice && o.maxPrice)
  validatePriceRange() {
    if (this.minPrice && this.maxPrice && this.minPrice > this.maxPrice) {
      throw new Error('The min price cannot be greater than the max price.');
    }
  }
}
