import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config.js';
import cors from 'cors';

import playerRoutes from './routes/players.js';
import tournamentRoutes from './routes/tournaments.js';
import authRoutes from './routes/user.js';
import profileRoutes from './routes/profile.js';
import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(express.json(),cors(corsOptions));

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to the API',
                            version: '1.0.0',
                            connected: true });    
});

app.use('/players', playerRoutes);
app.use('/tournaments', tournamentRoutes);
app.use('/auth', authRoutes);
app.use("/profile", profileRoutes);
app.use('/users', userRoutes)


// connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true}, () => {
    console.log('connected to mongoDB')});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
}
);
