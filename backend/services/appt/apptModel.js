var mongoose = require('mongoose');
const AppointmentSchema = require('./apptSchema')


const Appointment = mongoose.model('Appointment', AppointmentSchema);