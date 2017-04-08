var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tatooSchema = new Schema({
    master: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    image: String,
    createdOn: { type: Date, default: Date.now },
    flash: { type: Schema.Types.ObjectId, ref: 'Flash' },
    comments: [{
        author: { type: Schema.Types.ObjectId, ref: 'User' },
        createdOn: { type: Date, default: Date.now },
        body: String
    }],
    styles: [{ type: String, ref: 'Style' }],
    tags: [{ type: String, ref: 'Tag' }]
});

module.exports = mongoose.model('Tatoo', tatooSchema);