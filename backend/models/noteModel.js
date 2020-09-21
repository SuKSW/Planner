var mongoose = require('mongoose');
const NoteSchema = require('../schema/noteSchema')


const Note = mongoose.model('Note', NoteSchema);