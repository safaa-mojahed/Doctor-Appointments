const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);


// a document instance
var AdminUser = new User({ name: 'Safaa Mujahed', email: 'safamojahed123@gmail.com', username: 'safaa-mujahed', password: 'Admin123' });
 
// save model to database
User.count({}, function (err, count) {
  if(count == 0) {
    AdminUser.save(function (err, User) {
      if (err) return console.error(err);
      console.log(User.name + " saved to bookstore collection.");
    });
  }
});
