import mongoose from "mongoose";


const PlayerSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        default: "N/A"
    }
});


export default mongoose.model("Player", PlayerSchema);