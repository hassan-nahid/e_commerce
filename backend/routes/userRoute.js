import express from "express"

import { loginUser,registerUser,adminLogin, getMe, changePassword } from "../controllers/userController.js"
import authUser from "../middleware/auth.js";
const userRouter = express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/admin",adminLogin)
userRouter.get("/get-me",authUser,getMe)
userRouter.patch("/change-password",authUser,changePassword)

export default userRouter;