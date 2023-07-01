import { Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn } from 'typeorm';
import { Despensa } from '../despensa/Despensa';

@Entity()
export class Cliente {
    
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

  @OneToOne(() => Despensa)
  @JoinColumn({ name: 'codigo_despensa', referencedColumnName: 'codigo' })
  despensa: Despensa;
}

/*Columns:
codigo int PK 
usuario varchar(20) 
senha varchar(32) 
nome varchar(100) 
email varchar(30)*/