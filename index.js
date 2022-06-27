import express from 'express';
import usersRoutes from './routes/users.js';
import mongoose from 'mongoose';
import 'dotenv/config.js';
import cors from 'cors';
import tournamentRoutes from './routes/tournaments.js';

const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(express.json(),cors(corsOptions));


app.use('/users', usersRoutes);
app.use('/tournaments', tournamentRoutes);


// connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true}, () => {
    console.log('connected to mongoDB')});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
}
);
