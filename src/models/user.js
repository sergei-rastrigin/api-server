const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    masterInfo: {
        exp: Number,
        styles: [{ type: String, ref: 'Style' }],
        tatoos: [{ type: Schema.Types.ObjectId, ref: 'Tatoo' }],
        flashes: [{ type: Schema.Types.ObjectId, ref: 'Flash' }]
    },
    createdBy: { type: Date, default: Date.now },
    firstName: String,
    lastName: String,
    age: Number,
    city: { type: String, ref: 'City' },
    description: String,
    address: String,
    mobile: { type: String },
    email: { type: String },
    sex: String,
    avatar: String,
    background: String,
    social: {
        facebook: { type: String },
        vk: { type: String },
        instagram: { type: String }
    },
    username: String,
    password: String,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);