import express from "express";
import {getUsers, deleteUser } from "../controllers/UsersController.js";
import { verifyToken, verifyAdmin } from "../middlewares/authJWT.js";

const router = express.Router();

router.get("/", verifyToken,verifyAdmin, getUsers)

router.delete("/:id", verifyToken, verifyAdmin, deleteUser)

export default router;