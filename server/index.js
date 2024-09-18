const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const app = express();
const router = require('./routes/index');

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
const port = process.env.PORT || 9000;
app.get("/", (req, res)=>{
    res.json({
        message: "running ..."
    });
})

app.use('/api',router);

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log("server running at", port);
    })
})
