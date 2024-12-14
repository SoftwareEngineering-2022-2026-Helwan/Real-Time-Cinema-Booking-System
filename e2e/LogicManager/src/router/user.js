import express from "express";
import {
  createUser,
  getVendors,
  getUserById,
  deleteUser,
  updateUser,
  createVendor,
  getVendor,
  updateVendor,
  deleteVendor,
  getVendorCinema,
  updateMe,
  verifyToken,
} from "../controller/user.js";

import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";
import { protect, restrictTo, login } from "../middleWare/auth.js";

export const userRouter = express.Router();

userRouter.get("/verifyToken", protect, verifyToken);
userRouter.post("/user/signup", createUser);
userRouter.post("/user/login", login);

// user function
userRouter.get("/user/profile/:id", protect, getUserById);
userRouter.put("/user/editUser/:id", updateUser);
// editKey("user"), getKey
// vender Routes
userRouter.get(
  "/vendor/:id/cinemas/",
  protect,
  restrictTo("vendor"),
  getVendorCinema
);
userRouter.put("/vendor/:id", protect, restrictTo("vendor"), updateMe);
// end verify token

// admin Routes
userRouter.use(protect, restrictTo("admin"));
userRouter.post("/createVendor", createVendor);
userRouter.get("/showAllVendors", getVendors);
userRouter.get("/vendor/:id", editKey("vendor"), getKey, getVendor);
userRouter.delete("/deleteVendor/:id", deleteVendor);
userRouter.put("/vendor/:id", updateVendor);

//userRouter.delete("/dropUser/:id", deleteUser);
