const mongoose = require('mongoose');
const { Schema } = mongoose;

//Write missing codes here
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

//Write missing codes here
module.exports = mongoose.model('BlogModel', schema);