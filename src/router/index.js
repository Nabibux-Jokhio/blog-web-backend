import { Router } from "express";
import authRoutes from "./authRoutes.js";
import blogRoutes from "./blogRoutes.js";

const router = Router()


router.use("/auth", authRoutes )
router.use("/blog", blogRoutes )

export default router