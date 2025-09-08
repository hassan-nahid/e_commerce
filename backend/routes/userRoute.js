import express from "express"

import { loginUser,registerUser,adminLogin, getMe, changePassword, getAllUser, deleteUserById } from "../controllers/userController.js"
import authUser from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";
const userRouter = express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/admin",adminLogin)
userRouter.get("/get-me",authUser,getMe)
userRouter.patch("/change-password",authUser,changePassword)
userRouter.get("/all-user",adminAuth,getAllUser)
userRouter.get("/delete/:id",adminAuth,deleteUserById)

export default userRouter;