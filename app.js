const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongod://localhost/clinic');
let database = mongoose.connection;

// Check connection
db.once('open', function(){
    console.log('Connected to MongoDB');
  });
  
  // Check for DB errors
  db.on('error', function(err){
    console.log(err);
  });

// intiate App
const app = express();

//load view Engines
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Home Route
app.get('/', function(req, res) {
    res.render('home');
});

//start server
app.listen(3000, function() {
    console.log("Server started on port 3000 ...");
});