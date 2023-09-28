// Require the Mongoose package
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    item: {type: String, required: true},
    description: {type: String, required: true},
    dueDate: {type: Date, min: Date.now, required: true},
    priority: {type: String, enum: ['High','Normal','Low'], default: 'Normal'},
    status: {type: String, enum: ['Not Started','In progress','Done'], default: 'Not Started'}
});

// Define a schema method for date formatting
todoSchema.methods.formatDate = function(dateProperty) {
    const newDate = new Date(this[dateProperty]);
    let formattedDate = `${ `0${ newDate.getMonth() + 1 }`.slice(-2) }/`;
        formattedDate += `${ `0${ newDate.getDate() }`.slice(-2) }/`;
        formattedDate += `${ newDate.getFullYear() }`;
    return formattedDate;
};

module.exports = todoSchema;