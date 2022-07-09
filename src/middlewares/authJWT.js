import jwt from 'jsonwebtoken';
import User from '../models/User.js';


export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {return res.send(401, { message: 'No token provided.' });}

    jwt.verify(token, process.env.API_SECRET, (err, user) => {

        if (err) {return res.status(401).send({ message: 'Invalid token.' });}
        req.user = user;
        next();
    });
}

export const verifyAdmin = (req, res, next) => {
    const id = req.user.id;
    User.findById(id)
        .then(data => {
            if (data.role === 'admin') {
                next();
            }
            else {
                res.status(401)
                    .send({
                        message: 'You are not authorized to perform this action',
                    });
                    return;
            }
        }
        )
}
