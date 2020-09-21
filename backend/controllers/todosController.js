const Todo = require('../models/todoModel');

// Return list of all todos.
exports.todo_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Todo list');
};

// Return list of todos for a specific day.
exports.todos_list_on_date = function(req, res) {
    res.send('NOT IMPLEMENTED: Todo list for: ' + req.params.date);
};

// Create todo.
exports.todo_create = function(req, res) {
    res.send('NOT IMPLEMENTED: Todo create on POST');
};

// Delete todo.
exports.todo_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Todo delete on DELETE');
};

// Update todo.
exports.todo_update = function(req, res) {
    res.send('NOT IMPLEMENTED: Todo update on PUT');
};