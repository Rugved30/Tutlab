const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const asyncHandler = require("express-async-handler");
const TutorUser = require("../models/TutorUser");


//---Registration---
const register = asyncHandler(async (req,res)=>{
    const {username, email, password, role} = req.body
    if(!username || !email || !password || !role){
        res.status(400)
        throw new Error('Please all fields are required')
    }
    //Check The Email is Taken
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    //Match the User Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (role === 'tutor') Object.assign(userData, { bio, subjects, experience });

    //Create the user
    const newUser = new User({
        username,
        password: hashedPassword,
        email,
        role
    });
    //Save the user
    await newUser.save();

    res.json({
        status: true,
        message: 'Registration was successfull',
        user:{
            username,
            email,
            role,
        },
    });
});
//---Login---
const login = asyncHandler(async (req,res) =>{
    const {email, password} = req.body;

    //check for user email
    const user = await User.findOne({email});
    
    if(!user){
        res.status(401);
        throw new Error("Invalid email ");
    }

    //check if password is valid
    const isMatch = await bcrypt.compare(password, user?.password);
    
    if(!isMatch){
        res.status(401);
        throw new Error("Invalid password");
    }

    //Generate token (jwt)
    const token = jwt.sign({id: user?._id}, process.env.JWT_SECRET,{
        expiresIn: '1d' //token expires in 3 days
    });
    console.log(token);
    

    //Set the token into cookie (http only)
    res.cookie('token',token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24*60*60*1000, //1 day
    });

    //send the response
    res.json({
        status: 'success',
        _id: user?._id,
        message: 'Login success',
        username: user?.username,
        email: user?.email,
        role: user?.role,
    });
});
//---LogOut---
const logout = asyncHandler(async(req,res) => {
    res.cookie('token', "",{maxAge: 1})
    res.status(200).json({message: 'LogOut successfully'})
}); 
//---Profile---
const userProfile = asyncHandler(async(req,res) => {
    console.log(req.user);
    const id = "680cdfc2dc1ef012c45eeb7b";
    const user = await User.findById(id);
    if(user) {
        res.status(200).json({
            status: "success",
            user,
        });
    } else{
        res.status(404);
        throw new Error("User not found");
    }
});
//---Check User Auth Status---
const checkAuth = asyncHandler(async(req,res) =>{
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    if(decoded){
        res.json({
            isAuthenticated: true
        });
    }else{
        res.json({
            isAuthenticated: false
        });
    }
})
//---TutorRegistration---
const tutorRegistration = asyncHandler(async(req,res) => {
    const {name, email, phone, location, subject} = req.body
    if(!name || !email || !phone || !location ||!subject) {
        res.status(400)
        throw new Error("Please all fields are required")
    }
    //Check The Email is Taken
    const userExists = await TutorUser.findOne({email});
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    //Create the user
    const newTutorUser = new TutorUser({
        name,
        email,
        phone,
        location,
        subject
    });
    //save the user
    await newTutorUser.save();

    res.json({
        status: true,
        message: 'Tutor Registration was successfull',
        user:{
            name,
            email,
            subject,
        },
    });
})

module.exports = {
    register,
    login,
    logout,
    userProfile,
    checkAuth,
    tutorRegistration
}
