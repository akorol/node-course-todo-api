const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '6853ef15524f701c0e71f4660';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id is not valid');
// }

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
//   if (!todo) {
//     console.log('Id not found');
//   }
//
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var userId = '5853ac30c7d9cbdc1b6b3fa1';

User.findById(userId).then((user) => {
  if (!user) {
    console.log('Id not found');
  }

  console.log('User by ID', user);
}).catch((e) => console.log(e));
