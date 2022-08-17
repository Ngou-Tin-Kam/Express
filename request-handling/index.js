const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/hello", (req, res) => {
    res.send("Hello, World!");
});

app.post("/createDog", (req, res) => {
    console.log("BODY:", req.body);

    res.status(201).send();
});

app.get("/getAllDogs", (req, res) => {
    res.send();
});

app.get("/getDog/:id", (req, res) => {
    console.log("PARAMS:", req.params);

    res.send();
});

app.put("/updateDog", (req, res) => {
    console.log("QUERYL", req.query);

    res.send();
})

app.delete("/removeDog/:id", (req, res) => {
    console.log("PaARAMS:", req.params);

    res.send();
});

const server = app.listen(7300, () => {
    console.log(`Port: ${server.address().port} has started`);
});