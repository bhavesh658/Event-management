const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

// router.post('/login', loginValidation, login);
// router.post('/signup', (req,res)=>res.send("hiii"));
router.post('/signup',signupValidation, signup);
router.post('/login',loginValidation,login);


module.exports = router;