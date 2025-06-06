import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Form {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    city: string;

    @Column()
    state: string;
}
