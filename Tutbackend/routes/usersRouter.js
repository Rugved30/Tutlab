const express = require("express");
const {register, login, logout, userProfile, checkAuth, tutorRegistration} = require("../controllers/userController");
const isAuthenticated = require("../middleware/isAuthenticated");

const usersRouter = express.Router();

usersRouter.post('/register',register);
usersRouter.post('/login', login);
usersRouter.post('/logout', logout);
usersRouter.get('/profile',isAuthenticated,userProfile);
usersRouter.get('/auth/check', isAuthenticated, checkAuth);
usersRouter.post('/registertutor', tutorRegistration);

module.exports = usersRouter

