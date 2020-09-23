var mongoose = require('mongoose');
const NoteSchema = require('./noteSchema')


const Note = mongoose.model('Note', NoteSchema);