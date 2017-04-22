const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    masterInfo: {
        exp: Number,
        styles: [{type: String, ref: 'Style'}],
        tatoos: [{type: Schema.Types.ObjectId, ref: 'Tatoo'}],
        flashes: [{type: Schema.Types.ObjectId, ref: 'Flash'}]
    },
    createdBy: {type: Date, default: Date.now},
    firstName: String,
    lastName: String,
    age: Number,
    city: {type: String, ref: 'City'},
    description: String,
    address: String,
    mobile: {type: String},
    sex: String,
    avatar: String,
    background: String,
    role: {type: String, default: 'user'},
    social: {
        facebook: {type: String},
        vk: {type: String},
        instagram: {type: String}
    },
    email: {type: String, unique: true, lowercase: true},
    password: String,
});

userSchema.pre('save', (next) => {
    const user = this;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err)
            }

            user.password = hash;
            next();
        })
    })
});

module.exports = mongoose.model('User', userSchema);