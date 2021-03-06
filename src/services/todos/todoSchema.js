const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({ 
    checked: { 
        type: Boolean, 
        required: true,
        default:false 
    }, 
    priority: {
        type: String,
        required: true,
        enum: ['high', 'medium', 'low']
    },
    task: {
        type: String,
        required: true,
        maxlength: 50
    }  
});

module.exports = TodoSchema;