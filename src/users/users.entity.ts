import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;
}
