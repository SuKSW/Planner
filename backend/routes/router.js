var express = require('express');
var router = express.Router();

var todosController = require('../controllers/todosController');
var apptController = require('../controllers/apptController');
var notesController = require('../controllers/notesController');

router.get('/', function(req, res, next) {
    res.send('index');
});

router.get('/todos', todosController.todo_list);
router.get('/todos/:date', todosController.todos_list_on_date);
router.post('/todos', todosController.todo_create);
router.delete('/todos/:date', todosController.todo_delete);
router.put('/todos/:date', todosController.todo_update);

router.get('/appointments', apptController.appointments_list);
router.get('/appointments/:date', apptController.appointments_list_on_date);
router.post('/appointments', apptController.appointment_create);
router.delete('/appointments/:date', apptController.appointment_delete);
router.put('/appointments/:date', apptController.appointment_update);

router.get('/notes', notesController.notes_list);
router.get('/notes/:date', notesController.notes_list_on_date);
router.post('/notes', notesController.note_create);
router.delete('/notes/:date', notesController.note_delete);
router.put('/notes/:date', notesController.note_update);

module.exports = router;