import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PetColor } from 'src/common/enums/pet-color.enum';
import { PetSize } from 'src/common/enums/pet-size.enum';
import { PetType } from 'src/common/enums/pet-type.enum';
import { PetGender } from 'src/common/enums/pet-gender.enum';
import { IsPositive } from 'class-validator';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column({ type: 'text'})
  peType: PetType;

  @Column()
  name: string;

  @Column()
  sku: string;

  @Column({type: 'text'})
  gender: PetGender;

  @IsPositive()
  @Column()
  age: number;

  @Column({ type: 'text'})
  size: PetSize;

  @Column({ type: 'text'})
  color: PetColor;

  @IsPositive()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  vaccinated: boolean;

  @Column()
  dewormed: boolean;

  @Column()
  cert: boolean;

  @Column()
  microchip: boolean;

  @Column()
  location: string;

  @Column()
  publishedDate: Date;

  @Column({ nullable: true })
  additionalInformation?: string;
}
