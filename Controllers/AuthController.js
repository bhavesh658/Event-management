const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/User");


const signup = async (req, res) => {

    try {

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400)
                .json({
                    message: "required",
                    success: false
                })
        }

        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({ message: "true" })




    } catch (error) {
        console.log(error)
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }



}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        // console.log(user)
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        console.log(isPassEqual)
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const token = jwt.sign(
            { id: user._id, name: user.name },
            'mySecret123',  // TEMPORARY only for testing
            { expiresIn: '24h' }
        );



        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                token:"generatedToken",
                email,
                name: user.name
            })
    } catch (err) {
        console.log(err)
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

module.exports = {
    signup, login

}