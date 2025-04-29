const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const connectDB = require("./utils/connectDB");
const usersRouter = require("./routes/usersRouter");
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();
require('dotenv').config();


const PORT = process.env.PORT || 3000;

connectDB();

//---middlewares---
app.use(express.json()); //pass incoming json data
app.use(cookieParser()); //pass the cookie

//CORS
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));

//---Routes---
app.use("/api/tut/users",usersRouter);

//errorMiddleware
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}`);
})

