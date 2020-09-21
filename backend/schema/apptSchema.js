const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true
    },
    from: {
        type: Date,
        required: true
    },
    to: {
        type: Date
    },
    location: {
        type: String
    },
    details: {
        type: String
    }, 
});

module.exports = AppointmentSchema;