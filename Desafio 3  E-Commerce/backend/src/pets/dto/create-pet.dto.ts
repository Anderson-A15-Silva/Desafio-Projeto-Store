import { IsString, IsBoolean, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreatePetDto {
  @IsNumber()
  id: number;

  @IsString()
  image: string;

  @IsString()
  name: string;

  @IsString()
  sku: string;

  @IsString()
  gender: string;

  @IsNumber()
  age: number;

  @IsString()
  size: string;

  @IsString()
  color: string;

  @IsBoolean()
  vaccinated: boolean;

  @IsBoolean()
  dewormed: boolean;

  @IsBoolean()
  cert: boolean;

  @IsBoolean()
  microchip: boolean;

  @IsString()
  location: string;

  @IsDateString()
  publishedDate: Date;

  @IsOptional()
  @IsString()
  additionalInformation: string | null;
}
