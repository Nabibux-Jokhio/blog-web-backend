import express from "express"
import dotenv from "dotenv"
import blogRoute from "./src/routes/blogRoutes.js";

const app = express();
dotenv.config()

const PORT = process.env.PORT || 8080


app.use("/blogs", blogRoute)



app.listen(PORT, () => {
    console.log("server started", PORT);
})

