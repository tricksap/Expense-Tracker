const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/transaction", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const transactionSchema = new Schema({
  name: String,
  amount: Number,
  date: Number,
});
const Transaction = mongoose.model("Transaction", transactionSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/", function (req, res) {
  const transaction = new Transaction({
    name: req.body.name,
    amount: req.body.name,
  });
  transaction.save();
});

app.listen(3000, function () {
  console.log("Server Running");
});
