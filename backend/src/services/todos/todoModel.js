var mongoose = require('mongoose');
const TodoSchema = require('./todoSchema')

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;