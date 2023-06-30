import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Receita {

    @PrimaryGeneratedColumn()
    codigo: number;

    @Column()
    nome: string;

    @Column()
    imagem: string;

    @Column()
    tempo_de_preparo: number;

    @Column()
    resumo: number;

    @Column()
    instrucoes: number;
}


/*codigo int PK 
nome varchar(100) 
imagem varchar(300) 
tempo_de_preparo int 
resumo varchar(300) 
instrucoes*/