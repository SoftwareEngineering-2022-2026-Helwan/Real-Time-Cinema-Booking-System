import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controller/user.js"; 

import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";
export const userRouter = express.Router();

userRouter.get("/user", getUsers);

userRouter.get("/user/:id", editKey("user"), getKey, getUserById);

userRouter.post("/user", createUser);

userRouter.delete("/user", deleteUser);

userRouter.put("/user", updateUser);

