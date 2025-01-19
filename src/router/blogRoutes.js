import { Router } from "express";
import { AllBlogController, createBlogController, deleteBLogController, detailBlogController, updateBlogController } from "../controllers/blogControllers.js";

const blogRoutes = Router()

blogRoutes.post("/addBlog", createBlogController)
blogRoutes.post("/Blog/:id", detailBlogController)
blogRoutes.post("/blog", AllBlogController)
blogRoutes.post("/Blog/update/:id", updateBlogController)
blogRoutes.post("/Blog/delete:id", deleteBLogController)

export default blogRoutes