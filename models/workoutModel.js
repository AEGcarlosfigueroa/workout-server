const mongoose = require("mongoose");

const { Schema } = mongoose;

const workoutSchema = new Schema({
    name: String,
    mode: String,
    equipment: [String]
});

module.exports = mongoose.model("Workout", workoutSchema);
