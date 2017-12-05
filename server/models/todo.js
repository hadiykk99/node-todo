var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{
    text: {
        type: String,
        trim: true,
        minlength: 1
        
    },
    completed: {
        type: Boolean,
        default: 0
    },
    completedAt:{
        type: Number,
        default: 123
    }
});

module.exports = {Todo};