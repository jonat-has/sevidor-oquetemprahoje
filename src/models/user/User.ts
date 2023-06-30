import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  usuario: string;

  @Column()
  senha: string;

  @Column()
  nome: string;

  @Column()
  email: string;
}

/*Columns:
codigo int PK 
usuario varchar(20) 
senha varchar(32) 
nome varchar(100) 
email varchar(30)*/