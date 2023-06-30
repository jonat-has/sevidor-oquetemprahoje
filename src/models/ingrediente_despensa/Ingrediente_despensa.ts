import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class Ingrediente_despensa {

    @PrimaryColumn()
    codigo_despensa: number;

    @Column()
    codigo_ingrediente: number;

    @Column()
    qtd_ingrediente: number
}

/*codigo_despensa int PK 
codigo_ingrediente int PK 
qtd_ingrediente in*/