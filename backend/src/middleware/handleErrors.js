const mongoose = require('mongoose');

const handleErrors = (err, req, res, next) => {
    if (err instanceof mongoose.Error.ValidationError) {
        return res.status(400).json({
            status: "ValidationError",
            message: "Invalid input"
        });
    }

    return res.status(500).json({
        status: "Error",
        message: "Something caused an error"
    });
}


module.exports = handleErrors;