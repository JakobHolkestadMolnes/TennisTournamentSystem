import express from "express";
import { v4 as uuid } from "uuid";
import { getPlayer, getPlayers, newPlayer } from "../controllers/Players.js";
import { verifyToken } from "../middlewares/authJWT.js";


const router = express.Router();

router.get('/', getPlayers);

router.get('/:id', getPlayer);


router.post('/', verifyToken, (req, res) => {
   newPlayer(req, res);
}
);


export default router;