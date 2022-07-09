import mongoose from "mongoose";


const UserSchema = mongoose.Schema({

    fullName: {
        type: String,
        required: [true, "fullname not provided"]
    },
    email: {
        type: String,
        unique: [true, "email already exists"],
        lowercase: true,
        trim: true,
        required: [true, "email not provided"],
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{VALUE} is not a valid email'
        }
    },
    role: {
        type: String,
        enum: ["user"],
        default: "user",
    },
    password: {
        type: String,
        required: [true, "password not provided"],
    },
    created: {
        type: Date,
        default: Date.now
    }

});


export default mongoose.model("User", UserSchema);