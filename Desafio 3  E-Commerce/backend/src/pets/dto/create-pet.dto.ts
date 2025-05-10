import { IsString, IsBoolean, IsNumber, IsOptional, IsDateString, IsNotEmpty, IsDefined } from 'class-validator';

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
  @IsDefined()
  vaccinated: boolean;

  @IsBoolean()
  @IsDefined()
  dewormed: boolean;

  @IsDefined()
  @IsBoolean()
  cert: boolean;

  @IsBoolean()
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
  additionalInformation: string | null;
}
