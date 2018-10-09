const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));


router(app);

mongoose.connect('mongodb://localhost/auth')

//Server setup
const port = process.env.PORT || 4010;
const server = http.createServer(app);
server.listen(port);
console.log("Server is operating at port:", port);

module.exports = app;
