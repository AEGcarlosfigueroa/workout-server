const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodbRoute = "mongodb+srv://carlosfigueroa_db_user:,Grz556@cluster0.ca2blvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const workoutRouter = require("./routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/workouts", workoutRouter);

async function start() {
    try
    {
        await mongoose.connect(mongodbRoute);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
        console.log("Conexión con Mongo correcta.");
    }
    catch(error)
    {
        console.log(`Error al conectar a la base de datos: ${error.message}`);
    }
}

start();