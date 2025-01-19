import { Router } from "express";
import { registerController, loginController, logoutController } from "../controllers/authControllers.js"


const authRoutes = Router()

authRoutes.post("/register", registerController)

authRoutes.post("/login", loginController)

authRoutes.post("/logout", logoutController)



export default  authRoutes