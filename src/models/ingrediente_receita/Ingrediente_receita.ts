import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Ingrediente_receita {

    @PrimaryGeneratedColumn()
    codigo_receita: number;

    @Column()
    Codigo_ingrediente: number;

    @Column()
    qtd_ingrediente: number;
}





/*codigo_receita int PK 
codigo_ingrediente int PK 
qtd_ingrediente int*/