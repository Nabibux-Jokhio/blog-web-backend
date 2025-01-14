import express from "express"
import { enums } from "../constant/enums.js"
import { Blog } from "../models/blog.model.js"

const blogRoute = express.Router()

blogRoute.get("/", async (req, res) => {
    try {
        const getAllBlog = await Blog.find()
        res.status(200).send({ status: 200, message: enums.SUCCESS_MSG, data: getAllBlog })
    } catch (error) {
        res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION })
    }
})


blogRoute.get("/blog/add", async (req, res) => {
    try {
        const data = req.body;
        const response = await Blog.create(data)
        res.status(200).send({ status: 200, message: enums.ADD_MSG, data: response })
    } catch (error) {
        res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION })
    }
})

blogRoute.put("/blog/update/:id",async(req , res)=>{

     try {
        const {id} = req.params;
        const data = req.body;
        const response = await Blog.findByIdAndUpdate(id,data)
        res.status(200).send({ status: 200, message: enums.UPDATE_MSG, data: response })
    } catch (error) {
        res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION })
    }
})

blogRoute.delete("/blog/delete/:id",async(req , res)=>{

     try {
        const {id} = req.params;
        const response = await Blog.findByIdAndDelete(id)
        res.status(200).send({ status: 200, message: enums.DELETE_MSG, data: response })
    } catch (error) {
        res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION })
    }
})

export default blogRoute
