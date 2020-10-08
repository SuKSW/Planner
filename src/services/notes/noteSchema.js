const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({ 
    text: { 
        type: String, 
        required: true 
    }, 
    links: {
        type: [String]
    } 
});

module.exports = NotesSchema;