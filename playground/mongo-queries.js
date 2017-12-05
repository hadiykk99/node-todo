const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a263eb19db6a205b8e030a0';

// Todo.find({
//     _id: 'a'
// }).then((todoxx) => {
//     if(!todoxx){
//         console.log('no data');
//     }
//     console.log(todoxx);
// }).catch((e) => console.log('no data'));

var userId = '5a2654aa889d89423e09a5d6';

User.findById(userId).then((user) => {
    if(!user){
        return console.log('no user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));