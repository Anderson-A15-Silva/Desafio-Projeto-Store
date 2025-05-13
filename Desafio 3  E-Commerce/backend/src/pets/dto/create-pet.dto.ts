import { Transform } from 'class-transformer';
import {
  IsString, IsBoolean, IsNumber, IsOptional, IsDateString,
  IsNotEmpty, IsDefined, IsEnum
} from 'class-validator';
import { PetColor } from '../../common/enums/pet-color.enum';
import { PetSize } from 'src/common/enums/pet-size.enum';
import { PetType } from 'src/common/enums/pet-type.enum';
import { PetGender } from 'src/common/enums/pet-gender.enum';

export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsEnum(PetType)
  @IsNotEmpty()
  peType: PetType;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsEnum(PetGender)
  @IsNotEmpty()
  gender: PetGender;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  @IsNotEmpty()
  age: number;

  @IsEnum(PetSize)
  @IsNotEmpty()
  size: PetSize;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  @IsNotEmpty()
  price: number;

  @IsEnum(PetColor)
  @IsNotEmpty()
  color: PetColor;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsDefined()
  vaccinated: boolean;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsDefined()
  dewormed: boolean;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsDefined()
  cert: boolean;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsDefined()
  microchip: boolean;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsDateString()
  @IsNotEmpty()
  publishedDate: Date;

  @IsOptional()
  @IsString()
  additionalInformation?: string;
}
