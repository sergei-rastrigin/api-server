var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var masterSchema = new Schema({
    exp: Number,
    styles: [{ type: String, ref: 'Style' }],
    tatoos: [{ type: Schema.Types.ObjectId, ref: 'Tatoo' }],
    flashes: [{ type: Schema.Types.ObjectId, ref: 'Flash' }]
});

var socialSchema = new Schema({
    facebook: { type: String, unique: true },
    vk: { type: String, unique: true },
    instagram: { type: String, unique: true }
});

var userSchema = new Schema({
    isMaster: { type: Boolean, default: false },
    masterInfo: masterSchema,
    createdBy: { type: Date, default: Date.now },
    firstName: String,
    lastName: String,
    age: Number,
    city: { type: String, ref: 'City' },
    description: String,
    address: String,
    mobile: { type: String, unique: true },
    email: { type: String, unique: true },
    sex: String,
    avatar: String,
    background: String,
    social: socialSchema,
    username: String,
    password: String,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);