const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
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
  date: String,
  type: String,
});
const Transaction = mongoose.model("Transaction", transactionSchema);

app.get("/", function (req, res) {
  income = 0;
  expense = 0;
  Transaction.find({}, function (err, found) {
    found.forEach(function (element) {
      if (element.type === "income") {
        income += element.amount;
      } else {
        expense -= element.amount;
      }
    });

    res.render("home", {
      found: found.reverse(),
      income: income,
      expense: expense,
    });
  });
});

app.post("/delete", function (req, res) {
  id = req.body.delete;
  Transaction.deleteOne({ _id: id }, function (err) {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/");
});

app.post("/", function (req, res) {
  const transaction = new Transaction({
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
    type: req.body.button,
  });
  transaction.save();
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server Running");
});
