const mongoose = require('mongoose');

const bodyWorkout = new mongoose.Schema({
    exerciseName : {
        type : String,
    },
    URL : {
        type : String,
    },
    thumbnail : {
        type : String,
    },
    repition : {
        type : Number,
        default : 0
    },
    duration : {
        type : Number,
        default : 0,
    },
    instructions : {
        type : String,
    },
    focus_area : {
        type : Array,
    },
    common_mistakes : {
        type : Object
    },
    breathing_tips : {
        type : Array,
    }
});

module.exports = mongoose.model("BodyWorkout" , bodyWorkout);