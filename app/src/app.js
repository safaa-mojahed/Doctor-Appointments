var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  var dbobject = database.db("clinic");
  //Create a collection name "customers":
  dbobject.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("users collection created!");
    database.close();
  });

  dbobject.createCollection("appointments", function(err, res) {
      if (err) throw err;
      console.log("appointments collection created!");
      database.close();
  });

  var user = { fullName: "Safaa-Mujahed", username: "Admin", password: "Admin" };
  dbobject.collection("users").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    database.close();
  });

  dbobject.collection("users").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    database.close();
  });
});
