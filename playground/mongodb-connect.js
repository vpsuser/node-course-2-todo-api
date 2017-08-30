// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://23.251.146.92:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Krishna',
  //   age: 1000000000,
  //   location: 'Milpitas'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Users', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
