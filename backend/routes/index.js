'use strict';

const router = require('./router');
  
module.exports = {
    setUpRoutes: function(app) {
        app.use('/', router);
    }
};
