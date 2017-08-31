
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

//var id = '59a753caebea3d32271ef147';

var u_id = '59a71071378c33b02553e727'

if (!ObjectID.isValid(u_id)) {
  console.log('ID not valid');
}

User.findById(u_id).then((user) => {
  if(!user){
    return console.log('Id not Found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not Found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
