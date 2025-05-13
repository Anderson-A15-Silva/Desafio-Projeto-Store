import { Transform, Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, Min, ValidateIf } from 'class-validator';
import { PetColor } from 'src/common/enums/pet-color.enum';
import { PetGender } from 'src/common/enums/pet-gender.enum';
import { PetSize } from 'src/common/enums/pet-size.enum';
import { PetType } from 'src/common/enums/pet-type.enum';

export class FilterPetDto {
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

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  age?: number;

  @IsOptional()
  @IsEnum(PetColor, { each: true })
  @Transform(({ value }) => typeof value === 'string' ? value.split(',') : value)
  color?: PetColor[];

  @IsOptional()
  @IsEnum(PetType, { each: true })
  @Transform(({ value }) => typeof value === 'string' ? value.split(',') : value)
  peType?: PetType[];

  @IsOptional()
  @IsEnum(PetSize, { each: true })
  @Transform(({ value }) => typeof value === 'string' ? value.split(',') : value)
  size?: PetSize[];

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

  @IsEnum(PetGender, { each: true })
  @IsOptional()
  @Transform(({ value }) => typeof value === 'string' ? value.split(',') : value)
  gender?: PetGender[];

  @ValidateIf((o) => o.minPrice && o.maxPrice)
  validatePriceRange() {
    if (this.minPrice && this.maxPrice && this.minPrice > this.maxPrice) {
      throw new Error('The min price cannot be greater than the max price.');
    }
  }
}
