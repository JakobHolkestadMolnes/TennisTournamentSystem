import express from 'express';
import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';
import Player from '../models/Player.js';



export const newPlayer = (req,res) => {
    const player = new Player({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthDate: req.body.birthDate,
    })

    player.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })

}
export const getPlayers = (req,res) => {
    Player.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
}

export const getPlayer = (req,res) => {
    const { id } = req.params;
    Player.findById(id)
    .then(data => {
        if (data) {
            res.json(data);
        } else {
        res.json({message: "User not found"});
    }
    })
    .catch(err => {
        res.json(err);
    })
}