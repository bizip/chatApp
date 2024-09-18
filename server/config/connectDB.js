const mongoose = require("mongoose");

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        const connection = mongoose.connection

        connection.on('connected', ()=>{
            console.log("connect to db");
        })

        connection.on('error', (error)=>{
            console.log("something is wrong", error);
        })
    } catch (error) {
        console.log("error while connecteing db .....", error);
    }
}

module.exports = connectDB;