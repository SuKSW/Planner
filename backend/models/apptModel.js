var mongoose = require('mongoose');
const AppointmentSchema = require('../schema/apptSchema')


const Appointment = mongoose.model('Appointment', AppointmentSchema);