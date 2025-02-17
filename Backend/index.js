const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here
require('./connection')
const BlogModel = require('./model')

//Write your POST API here

app.post('/add', async (req, res) => {
  try {
      await BlogModel(req.body).save()
      res.send({ message: "OK" })
  } catch (e) {
      console.log(e)
  }
})

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "Updated successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
