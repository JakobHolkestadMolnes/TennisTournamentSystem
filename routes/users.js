import express from "express";
import { v4 as uuid } from "uuid";
import { getUser, getUsers, newUser } from "../controllers/Users.js";


const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);


router.post('/', newUser);

export default router;