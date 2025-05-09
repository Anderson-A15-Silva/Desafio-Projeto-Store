import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  sku: string;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  size: string;

  @Column()
  color: string;

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

  @Column({ type: 'text', nullable: true })
  additionalInformation: string | null;  
}
