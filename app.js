require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const urlDB = "mongodb+srv://dbCHB:mongotic22@cluster0.dosiv.mongodb.net/apporange?retryWrites=true&w=majority";

const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI || urlDB)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err) => console.error(err));

app.use("/api", require("./routes/routes"));

if(process.env.NODE_ENV || "production" === "production"){
    app.use(express.static(__dirname + "/public"));
    app.use("*", (req, res) => {
        res.sendFile(__dirname + "public/index.html");
    });
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Running server in http://localhost:${port}`));

