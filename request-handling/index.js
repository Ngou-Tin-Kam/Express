const express = require('express');

const app = express();

const server = app.listen(7300, () => {
  console.log(`Port: ${server.address().port} has started`);
});

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const routes = require("./routes/dogs-routes");

const Dog = require('./db');

console.log(Dog);

app.use((req, res, next) => {
  const logEntry = `host: ${req.host}
    ip: ${req.ip}
    method: ${req.method}
    path: ${req.path}
    time: ${new Date()}`;
  console.log(logEntry);
  next();
});

app.use(routes);
