// Require the Mongoose package
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    item: {type: String, required: true},
    description: {type: String, required: true},
    dueDate: {type: Date, min: Date.now, required: true},
    priority: {type: String, enum: ['High','Normal','Low'], default: 'Normal'},
    status: {type: String, enum: ['Not Started','In progress','Done'], default: 'Not Started'}
});

module.exports = todoSchema;