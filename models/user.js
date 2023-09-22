// Require the Mongoose package
const mongoose = require('mongoose');
const todoSchema = require('./todo.js');

// Create a schema to define the properties of the users collection
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    alias: { type: String},
    hometown: { type: String},
    email: {type: String},
    todos: [todoSchema]
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('User', userSchema);