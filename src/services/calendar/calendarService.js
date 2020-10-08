
// Return todays date.
exports.get_date = function(req, res) {
    let dateJson = {
        date: new Date()
    } 
    res.send(dateJson);
};