import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredientes {
    
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  nome: string;

  @Column()
  unidade: string;
}