import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const signup = (req, res) => {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
        res.status(400).json({ message: 'Please fill out all fields',
    example: {
        fullName: 'John Doe',
        email: 'john@doe.com',
        role: 'user',
        password: 'password',
     },
     });
    return;
    }

    // Check if user already exists
     User.findOne({ email })
        .then(user => {

            if (user) {
                res.status(400).json({ message: 'User already exists' });
                return;
            }
            else {
                const user = new User({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    role: req.body.role,
                    password: bcrypt.hashSync(req.body.password, 10),
                });
                user.save((err, user) => {
                    if (err) {
                        res.status(500)
                            .send({
                                message: err,
                            });
                        return;
                    }
                    else {
                        try {
                            res.status(200)
                                .send({
                                    message: 'User created successfully',
                                });
                            return;
                        }
                        catch (err) {
                            res.status(500)
                                .send({
                                    message: err,
                                });
                            return;
                        }
                        return;
                    }
                });
            }
    })
    


}

export const signin = (req, res) => {

    User.findOne({
        email: req.body.email,
    })
        .exec((err, user) => {
            if (err) {
                res.status(500)
                    .send({
                        message: err,
                    });
                return;
            }
            if (!user) {
                res.status(401)
                    .send({
                        message: 'User not found',
                    });
                    return;

            }

            // comparing passwords
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                res.status(401)
                    .send({
                        accessToken: null,
                        message: 'Invalid Password!',
                    });
                    return;
            }

            // signing token with user id
            const token = jwt.sign({
                id: user.id
            }, process.env.API_SECRET, {
                expiresIn: 86400
            });

            res.status(200)
                .send({
                    user: {
                        id: user._id,
                        email: user.email,
                        fullName: user.fullName,
                    },
                    message: "Login successful",
                    accessToken: token,
                });
        });
}