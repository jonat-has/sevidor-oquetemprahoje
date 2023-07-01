import { AppDataSource } from "./data-source"
import router from "./router/router"
const express = require('express')

// establish database connection
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// create and setup express app
const app = express()
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})
