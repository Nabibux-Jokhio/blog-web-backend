import { Router } from "express"
import { registerUser , login ,logout , resetPassword} from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middlewares.js"

const userRoutes = Router()

userRoutes.post("/register", upload.fields([
    {
        name: "avater",
        maxCount: 1
    },
]), registerUser)

userRoutes.post("/login", login)

userRoutes.post("/logout",  logout)

userRoutes.post("/reset-password", resetPassword)




export default userRoutes