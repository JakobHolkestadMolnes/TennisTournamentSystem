import User from "../models/User.js";

export const profile = (req, res) => {
    const { id } = req.user;
    User.findById(id)
        .then(data => {
            res.json({
                message: "Profile successfully retrieved",
                data:{
                id: data._id,
                fullName: data.fullName,
                email: data.email,
                role: data.role,
                createdAt: data.created,
            }});
        })
    }