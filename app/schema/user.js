const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * Create a Mongoose schema for the user's model
 */
let UserSchema = new Schema({
    // user information
    firstname: {type: String, required: true,lowercase: true, max: 100},
    lastname: {type: String, required: true,lowercase: true, max: 100},
    gender: {type: String, required: true,lowercase: true,},
    birthdate: {type: Date, required: true},
    email: {type: String, required: true,lowercase: true,},
    password: {type: String, required: true, max: 256},
});


// Export the model
module.exports = mongoose.model('users', UserSchema, 'users')