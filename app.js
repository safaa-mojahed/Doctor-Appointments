const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);
let database = mongoose.connection;

// Check connection
database.once('open', function(){
    console.log('Connected to MongoDB');
  });
  
  // Check for DB errors
  database.on('error', function(err){
    console.log(err);
  });

// intiate App
const app = express();

// Bring in Models
let User = require('./models/user');

//load view Engines
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Home Route
app.get('/', function(req, res){
    User.find({}, function(err, user){
      if(err){
        console.log(err);
      } else {
        res.render('home');
      }
    });
  });

//start server
app.listen(3000, function() {
    console.log("Server started on port 3000 ...");
});