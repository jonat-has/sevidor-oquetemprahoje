import "reflect-metadata"
import { DataSource } from "typeorm"
import { Ingredientes } from "./models/ingredientes/Ingrediente"
import { User } from "./models/user/User"
import { Receita } from "./models/receita/Receita"
import { Ingrediente_receita } from "./models/ingrediente_receita/Ingrediente_receita"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '8591',
    database: 'projetoweb2',
    entities: [ Ingredientes,User,Receita,Ingrediente_receita ],
    synchronize: false,
})
