const Appointment = require('../models/apptModel');

// Return list of all appointments.
exports.appointments_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Appointments list');
};

// Return list of appointments for a specific day.
exports.appointments_list_on_date = function(req, res) {
    res.send('NOT IMPLEMENTED: Appointments list for: ' + req.params.date);
};

// Create appointment.
exports.appointment_create = function(req, res) {
    res.send('NOT IMPLEMENTED: Appointment create on POST');
};

// Delete appointment.
exports.appointment_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Appointment delete on DELETE');
};

// Update appointment.
exports.appointment_update = function(req, res) {
    res.send('NOT IMPLEMENTED: Appointment update on PUT');
};