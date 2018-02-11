const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();
app.use(bodyParser.json());

const path = require('path');
const staticAssetsPath = path.resolve(__dirname, './build');
app.use(express.static(staticAssetsPath));
routes(app);

module.exports = app;