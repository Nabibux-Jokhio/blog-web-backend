import { Blog } from "../models/blogModals.js"

const createBlogController = async (req, res) => {
    try {
        const { blogName, content, category, author } = req.boby
        if (!blogName || !content || category || author) {
            res.status(400).json({ message: "All fields are required" })
        }

        const blog = Blog.create({
            author,
            category,
            blogName,
            content
        })

        res.status(201).send({
            success: true,
            message: "Blog added successfully",
            blog
        })

    } catch (error) {
        res.status(500).send({ status: 500, message: "somrthing went wrong" })
    }
}
const detailBlogController = async (req, res) => {
    try {
        const Blog = await blogModel.findById(req.params.BlogId);
        if (!Blog) {
            res.status(400).json({ message: "blog not found " })
        }

        res.status(200).send({
            success: true,
            Blog,
        });
    } catch (error) {
        res.status(404).send({ status: 404, message: "somrthing went wrong" })
    }

}
const updateBlogController = async (req, res) => {
    try {
        const { blogName, content, author, category } = req.body;
        const { BlogId } = req.params;

        const Blog = await blogModel.findByIdAndUpdate(
            BlogId,
            {
                blogName, content, author, category
            },
            { new: true }
        );

        if (!Blog) {
            res.status(404).send({ status: 404, message: " blog not found" })
        }

        res.status(200).send({
            success: true,
            message: "Blog updated successfully",
            Blog,
        });
    } catch (error) {
        res.status(404).send({ status: 404, message: "something went wrong" })
    }

}
const deleteBLogController = async (req, res) => {
    try {
        const { blogId } = req.params;
        console.log(blogId)
        const resp = await Blog.findByIdAndDelete(blogId);

        res.status(200).send({
            success: true,
            message: "Blog deleted successfully",
        });

    } catch (error) {
        res.status(404).send({ status: 404, message: "somrthing went wrong" })
    }
}

const AllBlogController = async (req, res) => {
    try {
        const getAllblog = await Blog.find()
        res.status(200).send({ status: 200, message: "sucess", data: getAllblog })
    } catch (error) {
        res.status(404).send({ status: 404, message: "somrthing went wrong" })
    }
}

export { createBlogController, deleteBLogController, detailBlogController, updateBlogController, AllBlogController }