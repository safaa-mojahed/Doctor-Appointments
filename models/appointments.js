let mongoose = require('mongoose');

// Appointments Schema
let appointmentsSchema = mongoose.Schema({
  doctor:{
    type: String,
    required: true
  },
  patientName:{
    type: String,
    required: true
  },
  contactInfo:[
    {
        mobile: Number,
        phone: Number,
        email: String
    }  
  ]
,
  date:{
    type: Date,
    required: true
  },
  time:{
    type: time,
    required: true
  },
});

let appointment = module.exports = mongoose.model('Appointment', appointmentsSchema);
