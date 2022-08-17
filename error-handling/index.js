const express = require("express");

const app = express();

const server = app.listen(7300, () => {
  console.log(`Port: ${server.address().port} has started`);
});

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/getError', (req, res, next) => {
    next(Error('Error Message'));
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});
