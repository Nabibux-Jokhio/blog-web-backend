import { User } from "../models/usermodel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const registerController = async (req, res) => {
    const { username, email, password, role } = req.body
    if (!username || !email || !password || !role){
        return res.status(400).json({ message: "All fields are required" })

    }
    const user = await User.findOne({ email })

    if (user) {
        return res.status(400).json({ message: "Email is already esixt" })
    }
    const hashpassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        username,
        email,
        password: hashpassword,
        role,
    })

    res.status(201).json({ message: "user Created successfully ", data: newUser })
}
const loginController = async (req, res) => {
    const {email, password } = req.body
    if (!email || !password){
        return res.status(400).json({ message: "All fields are required" })
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(400).json({ message: "user not found" })
    }
    
    const isMatch = await bcrypt.compare(password,user?.password)
    if(!isMatch){
       return res.status(400).json({message: "invalid password "}) 
    }

    const token = jwt.sign({id:user?._id},process.env.ACCESS_TOKEN_SECRET)
    res.status(200).json({message:"login successfully"},token , user)
}
const logoutController = async (req, res) => {
    res.status(200).send({ message: "logout suceessfully" })
}



export  { registerController, loginController, logoutController }