const HttpStatusCode = require('../../constants/httpStatusCode');
const TodoModel = require('./todoModel');

// Return list of all todos.
exports.get_list = function(req, res) {
    TodoModel.find({}, function (err, todoList) {
        if (err) {
            return next(err);
        }
        return res.status(HttpStatusCode.OK).send(todoList);
    });
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
            return next(err);
        }
        return res.status(HttpStatusCode.CREATED).send(todoCreated);
    });
};

// Delete todo.
exports.delete = function(req, res) {
    const res = await Character.deleteOne({ name: 'Eddard Stark' });
// `1` if MongoDB deleted a doc, `0` if no docs matched the filter `{ name: ... }`
res.deletedCount;
    TodoModel.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            return next(err);
        }
        res.body.message = "Successfully deleted."
        return res.status(HttpStatusCode.OK);
    });
};

// Update todo.
exports.update = function(req, res) {
    res.send('NOT IMPLEMENTED: Todo update on PUT');
    
};