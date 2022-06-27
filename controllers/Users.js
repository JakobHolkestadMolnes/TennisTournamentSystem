import express from 'express';
import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';
import User from '../models/User.js';



export const newUser = (req,res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthDate: req.body.birthDate,
    })

    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })

}
export const getUsers = (req,res) => {
    User.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
}

export const getUser = (req,res) => {
    const { id } = req.params;
    User.findById(id)
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