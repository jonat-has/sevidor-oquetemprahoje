import { AppDataSource } from "./data-source"
import { Ingredientes } from "./entity/Ingrediente"

AppDataSource.initialize().then(async () => {
    const users = await AppDataSource.manager.find(Ingredientes)
    console.log("Loaded users: ", users)
}).catch(error => console.log(error))
