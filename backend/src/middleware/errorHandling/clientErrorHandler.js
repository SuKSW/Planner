const mongoose = require('mongoose');
const HttpStatusCode = require('../../constants/httpStatusCode');

const clientErrorHandler = (err, req, res, next) => {
    if (err instanceof mongoose.Error.ValidationError) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({
            status: "ValidationError",
            message: "Invalid input"
        });
    }

    if (err.status == HttpStatusCode.NOT_FOUND) {
        return res.status(HttpStatusCode.NOT_FOUND).json({
            status: "NotFoundError",
            message: "Not found"
        });
    }
    next(err);
}

module.exports = clientErrorHandler;