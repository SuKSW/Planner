const HttpStatusCode = require('../../constants/httpStatusCode');

const errorHandler = (err, req, res, next) => {
    return res.status(HttpStatusCode.INTERNAL_SERVER).json({
        status: "Error",
        message: "Something caused an error"
    });
}

module.exports = errorHandler;