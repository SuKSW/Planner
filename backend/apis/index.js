'use strict';

const root = require('./rootApi');
const todos = require('./todosApi');
const appointments = require('./appointmentsApi');
  
module.exports = {
    setUpApis: function(app) {
        app.use('/', root);
        app.use('/todos', todos);
        app.use('/appointments', appointments);
    }
};
