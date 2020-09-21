var mongoose = require('mongoose');
const TodoSchema = require('../schema/todoSchema')


const Todo = mongoose.model('Todo', TodoSchema);