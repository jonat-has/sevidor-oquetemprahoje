import "reflect-metadata"
import { DataSource } from "typeorm"
import { Ingredientes } from "./models/Ingrediente"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '8591',
    database: 'projetoweb2',
    entities: [ Ingredientes ],
    synchronize: false,
})
