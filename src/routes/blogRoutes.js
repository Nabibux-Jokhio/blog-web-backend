import express from "express"
import { enums } from "../constant/enums.js"

const blogRoute = express.Router()

blogRoute.get("/", (req, res) => {
    try {
        res.status(200).send({ status: 200 , message:enums.SUCCESS_MSG , data:[] })
    } catch (error) {
        res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION })
    }
})

export default blogRoute
