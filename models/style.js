var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var styleSchema = new Schema({
    _id: String
});

module.exports = mongoose.model('Style', styleSchema);