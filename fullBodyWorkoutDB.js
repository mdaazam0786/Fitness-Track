require("dotenv").config();

const connectDB = require("./db/connect");
const Model = require("./models/products");

const fullBodyWorkoutDataJson = require("./fullBodyWorkout.json");

const start = async() =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Model.create(fullBodyWorkoutDataJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();