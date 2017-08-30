var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://23.251.146.92:27017/TodoApp');

module.exports = {mongoose};
