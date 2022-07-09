import express from "express";
import { v4 as uuid } from "uuid";
import { profile } from "../controllers/secureRoute.js";
import { getPlayer, getPlayers, newPlayer } from "../controllers/Players.js";
import { verifyToken } from "../middlewares/authJWT.js";


const router = express.Router();

router.get('/', verifyToken, profile);



export default router;