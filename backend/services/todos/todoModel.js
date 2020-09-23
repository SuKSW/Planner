var mongoose = require('mongoose');
const TodoSchema = require('./todoSchema')


const Todo = mongoose.model('Todo', TodoSchema);