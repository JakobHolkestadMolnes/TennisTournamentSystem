import express from 'express';
import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';
import Tournament from '../models/Tournament.js';



export const newTournament = (req, res) => {
    const tournament = new Tournament({
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        location: req.body.location,
        description: req.body.description,
        players: req.body.players,
        matches: req.body.matches,
    })

    tournament.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })

}
export const getTournaments = (req, res) => {
    Tournament.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
}

export const getTournament = (req, res) => {
    const { id } = req.params;
    Tournament.findById(id)
        .then(data => {
            if (data) {
                res.json(data);
            } else {
                res.json({ message: "User not found" });
            }
        })
        .catch(err => {
            res.json(err);
        })
}

export const removePlayerFromTournament = (req, res) => {
    const { id, playerId } = req.params;
    Tournament.findById(id)
        .then(data => {
            if (data) {
                data.players.remove(playerId);
                data.save()
                    .then(data => {
                        res.json(data);
                    })
                    .catch(err => {
                        res.json(err);
                    })
            } else {
                res.json({ message: "Tournament not found" });
            }
        })
}

export const addPlayerToTournament = (req, res) => {
    const { id, playerId } = req.params;
    Tournament.findById(id)
        .then(data => {
            if (data) {
                data.players.push(playerId);
                data.save()
                    .then(data => {
                        res.json(data);
                    })
                    .catch(err => {
                        res.json(err);
                    })
            } else {
                res.json({ message: "Tournament not found" });
            }
        })
}
