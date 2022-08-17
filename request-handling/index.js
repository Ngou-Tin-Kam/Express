const express = require("express");

const app = express();

const server = app.listen(7300, () => {
  console.log(`Port: ${server.address().port} has started`);
});

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
  const logEntry = 
    `host: ${req.host}
    ip: ${req.ip}
    method: ${req.method}
    path: ${req.path}
    time: ${new Date()}`;
  console.log(logEntry);
  next();
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
    console.log("PARAMS:", req.params);

    res.send();
});