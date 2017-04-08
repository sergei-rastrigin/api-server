var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
    _id: String
});

module.exports = mongoose.model('Tag', tagSchema);