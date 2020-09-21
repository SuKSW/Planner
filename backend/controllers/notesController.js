const Note = require('../models/noteModel');

// Return list of all notes.
exports.notes_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Notes list');
};

// Return list of notes for a specific day.
exports.notes_list_on_date = function(req, res) {
    res.send('NOT IMPLEMENTED: Notes list for: ' + req.params.date);
};

// Create note.
exports.note_create = function(req, res) {
    res.send('NOT IMPLEMENTED: Note create on POST');
};

// Delete note.
exports.note_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Note delete on DELETE');
};

// Update note.
exports.note_update = function(req, res) {
    res.send('NOT IMPLEMENTED: Note update on PUT');
};