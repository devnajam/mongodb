const express = require('express');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/learn';

mongoose.connect(mongoDB, { useNewUrlParser: true });
const app = express();
const db = mongoose.connection;
const Schema = mongoose.Schema;

const model1 = new Schema({
  name: String,
  age: Number
});

const Model1 = mongoose.model('Model1', model1);

Model1.find({ name: 'Najam' }, (err, data) => {
  console.log(data);
});

app.listen(3000, () => {
  console.log('server has started');
});
