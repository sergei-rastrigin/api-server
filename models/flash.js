var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flashSchema = new Schema({
    master: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    image: String,
    createdOn: { type: Date, default: Date.now },
    tatoo: { type: Schema.Types.ObjectId, ref: 'Tatoo' },
    price: Number,
    comments: [{
        author: { type: Schema.Types.ObjectId, ref: 'User' },
        createdOn: { type: Date, default: Date.now },
        body: String
    }],
    status: {
        name: String,
        customer: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    styles: [{ type: String, ref: 'Style' }],
    tags: [{ type: String, ref: 'Tag' }],
});

module.exports = mongoose.model('Flash', flashSchema);