import express from "express"
import dotenv from "dotenv"
import blogRoute from "./src/routes/blogRoutes.js";
import mongoose from "mongoose";
import { DB_NAME } from "./src/constant/enums.js";



const app = express();
dotenv.config()

const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI


app.use("/", blogRoute)

mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
.then(()=>{
    console.log("DB CONNECT  SUCCESSFULLY");  
})
.catch((error)=>{
    console.log("DB NOT CONNECT",error);
})

app.listen(PORT, () => {
    console.log("server started", PORT);
})


