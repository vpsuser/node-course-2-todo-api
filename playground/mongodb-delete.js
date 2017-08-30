// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://23.251.146.92:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'Eat Breakfast'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat Dinner'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({name:'Krishna'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59a60d5096c6a33c2dab69b0')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });
  //db.close();
});
