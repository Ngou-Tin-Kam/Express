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

const routes = require('./routes/routes');

app.use(routes);