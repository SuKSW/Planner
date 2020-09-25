const TodoModel = require('./todoModel');

// Return list of all todos.
exports.get_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Todo list');
};

// Return list of todos for a specific day.
exports.get_list_by_date = function(req, res) {
    res.send('NOT IMPLEMENTED: Todo list for: ' + req.params.date);
};

// Create todo.
exports.create = function(req, res, next) {
    let todo = {
        checked: req.body.checked,
        priority: req.body.priority,
        task: req.body.task
    }
    TodoModel.create(todo, function (err, todoCreated) {
        if (err) {
            console.log("TodoService Error:", err.message);
            return next(err);
        }
        return res.status(201).send(todoCreated);
    });
};

// Delete todo.
exports.delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Todo delete on DELETE');
};

// Update todo.
exports.update = function(req, res) {
    res.send('NOT IMPLEMENTED: Todo update on PUT');
};