var express = require('express');
var router = express.Router();

var calendarService = require('./services/calendar/calendarService');
var todoService = require('./services/todos/todoService');
var apptService = require('./services/appt/apptService');
var notesService = require('./services/notes/notesService');

router.get('/', function(req, res, next) {
    res.send('index');
});

router.get('/calendar/date', calendarService.get_date);

router.get('/todos', todoService.get_list);
router.get('/todos/:date', todoService.get_list_by_date);
router.post('/todos', todoService.create);
router.delete('/todos/:date', todoService.delete);
router.put('/todos/:date', todoService.update);

router.get('/appointments', apptService.get_list);
router.get('/appointments/:date', apptService.get_list_by_date);
router.post('/appointments', apptService.create);
router.delete('/appointments/:date', apptService.delete);
router.put('/appointments/:date', apptService.update);

router.get('/notes', notesService.get_list);
router.get('/notes/:date', notesService.get_list_by_date);
router.post('/notes', notesService.create);
router.delete('/notes/:date', notesService.delete);
router.put('/notes/:date', notesService.update);

module.exports = router;