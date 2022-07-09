import User from "../models/User.js";

export const getUsers = (req, res) => {
    User.find({})
        .then(users => {
            const usersWithoutPassword = users.map(user => {
                const { password, ...userWithoutPassword } = user.toObject();
                return userWithoutPassword;
            });
            res.status(200).json({
                message: "Users fetched successfully",
                users: usersWithoutPassword,
            });
        }
        )
        .catch(err => {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
        );
}

export const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => {
            res.status(200).json({
                message: "User deleted successfully",
            });
        }
        )
        .catch(err => {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
        );
}