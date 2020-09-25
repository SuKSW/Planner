const Note = require('./noteModel');

// Return list of all notes.
exports.get_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Notes list');
};

// Return list of notes for a specific day.
exports.get_list_by_date = function(req, res) {
    res.send('NOT IMPLEMENTED: Notes list for: ' + req.params.date);
};

// Create note.
exports.create = function(req, res) {
    res.send('NOT IMPLEMENTED: Note create on POST');
};

// Delete note.
exports.delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Note delete on DELETE');
};

// Update note.
exports.update = function(req, res) {
    res.send('NOT IMPLEMENTED: Note update on PUT');
};