require('dotenv').config();
const express = require('express');
const massive = require('massive');
ctrl = require('./controller')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set("db", db);
    console.log('It is connected!')
})
.catch(err => console.log(err))

//ENDPOINTS
app.get("/api/inventory",ctrl.getInventory)
app.post("/api/inventory", ctrl.addInventory)
app.delete("/api/inventory/:id", ctrl.deleteInventory)
app.put("/api/inventory/:id", ctrl.editInventory)
app.listen(SERVER_PORT, () => {
    console.log(`Server running on ${SERVER_PORT}`)
})