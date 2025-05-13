import { IsPositive } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  prType: string;

  @IsPositive()
  @Column('decimal')
  price: number;

  @IsPositive()
  @Column('decimal')
  size: number;
}
