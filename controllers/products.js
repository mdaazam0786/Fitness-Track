const Model = require("../models/products")

const fullBodyWorkoutData = async(req,res)=>{
    const fullBodyWorkoutData = await Model.find({});
    res.status(200).json({fullBodyWorkoutData});
};
const getAllProductsTesting = async(req,res)=>{
    res.status(200).json({msg : "I am getAllProductsTesting"});
};

module.exports = {fullBodyWorkoutData, getAllProductsTesting};