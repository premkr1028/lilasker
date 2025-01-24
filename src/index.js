import express from "express";
import dbconnect from "./db/dbconnection.js";
import registerRoute from "./routes/user.js";
import clientAddingRoute from "./routes/addClients.js";
const app = express()
const port = 3000

app.use("/", registerRoute)
app.use("/v1", clientAddingRoute)
app.get("/",(req,res) =>{
res.send("megha")
})
dbconnect()
app.listen(port, ()=>{
    console.log(port)
})