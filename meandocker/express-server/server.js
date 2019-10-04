// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
// Get our API routes
const api = require('./routes/api');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myappdatabase');


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Set our api routes
app.use('/', api);


/**
 **_ Get port from environment and store in Express.
 _**/
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 _ Create HTTP server.
 _/


/_*
 _ Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${3000}`)); 
