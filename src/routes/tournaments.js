import express from "express";
import { v4 as uuid } from "uuid";
import { getTournaments, getTournament, newTournament, removePlayerFromTournament } from "../controllers/Tournaments.js";


const router = express.Router();

router.get('/', getTournaments);

router.get('/:id', getTournament);


router.post('/', newTournament);

router.delete('/:id/:playerId', removePlayerFromTournament);

export default router;