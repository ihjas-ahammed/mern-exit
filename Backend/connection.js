const mongoose = require("mongoose");
//Write missing code here

const pass = 'O8E1NNqZ10BGQxRG'
const url = 'mongodb+srv://ihjaskallingal:'+pass+'@cluster0.ehadx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose
  .connect(
    url
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
