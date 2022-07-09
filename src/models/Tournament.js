import mongoose from "mongoose";


const TournamentSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    players: {
        type: Array,
        required: true
    },
    teams: {
        type: Array,
        required: true
    },
    matches: {
        type: Array,
        required: true
    }
});


export default mongoose.model("Tournament", TournamentSchema);