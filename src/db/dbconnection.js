import mongoose from "mongoose";

const dbconnect = () => {
    mongoose.connect("mongodb+srv://premkumar:littletaskmanager@cluster0.sjdx4.mongodb.net/lilaskerDb").then(()=>{
        console.log("connection success")
    })
    
}

export default dbconnect