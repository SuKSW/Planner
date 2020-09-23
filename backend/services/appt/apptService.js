const Appointment = require('./apptModel');

// Return list of all appointments.
exports.get_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Appointments list');
};

// Return list of appointments for a specific day.
exports.get_list_by_date = function(req, res) {
    res.send('NOT IMPLEMENTED: Appointments list for: ' + req.params.date);
};

// Create appointment.
exports.create = function(req, res) {
    res.send('NOT IMPLEMENTED: Appointment create on POST');
};

// Delete appointment.
exports.delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Appointment delete on DELETE');
};

// Update appointment.
exports.update = function(req, res) {
    res.send('NOT IMPLEMENTED: Appointment update on PUT');
};