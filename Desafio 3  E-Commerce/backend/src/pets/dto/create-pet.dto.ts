import { IsString, IsBoolean, IsNumber, IsOptional, IsDateString, IsNotEmpty } from 'class-validator';

export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  size: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsBoolean()
  @IsNotEmpty()
  vaccinated: boolean;

  @IsBoolean()
  @IsNotEmpty()
  dewormed: boolean;

  @IsBoolean()
  @IsNotEmpty()
  cert: boolean;

  @IsBoolean()
  @IsNotEmpty()
  microchip: boolean;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsDateString()
  @IsNotEmpty()
  publishedDate: Date;

  @IsOptional()
  @IsString()
  additionalInformation: string | null;
}
