import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookShelf {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;
}
