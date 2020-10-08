const chalk = require('chalk');

const errorLogger = (err, req, res, next) => {
    console.log(chalk.blue("[" + err.name + "] ", err.message));
    next(err)
}
  
module.exports = errorLogger;