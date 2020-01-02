const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    // user information
    firstname: {type: String, required: true, max: 100},
    lastname: {type: String, required: true, max: 100},
    gender: {type: String, required: true},
    birth: {type: Date, required: true},
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 256},
    salt: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('users', UserSchema);