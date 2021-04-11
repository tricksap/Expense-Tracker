transactions = [];
let income = 0;
let expense = 0;

$(document).ready(function () {
  $("#date").val(new Date().toDateInputValue());
});

$(".btn").click(function () {
  if ($("#amount").val() === "" || $("#name  ").val() === "") {
    alert("Please Fill all the input");
  } else {
    let clicked = $(this).attr("name");
    if (clicked == "income") {
      Income();
    } else if (clicked == "expense") {
      Expense();
    }
  }
});

function Income() {
  const transaction = {
    name: $("#name").val(),
    amount: $("#amount").val(),
    date: $("#date").val(),
    type: "income",
  };
  transactions.push(transaction);
  $("#name").val("");
  $("#amount").val("");
  Balance();
  Table();
}

function Expense() {
  const transaction = {
    name: $("#name").val(),
    amount: "-" + $("#amount").val(),
    date: $("#date").val(),
    type: "expense",
  };
  transactions.push(transaction);
  $("#name").val(" ");
  $("#amount").val(" ");
  Balance();
  Table();
}
function Balance() {
  income = 0;
  expense = 0;
  transactions.forEach(function (e) {
    if (e.type == "income") {
      income += parseInt(e.amount);
    } else if (e.type == "expense") {
      expense += parseInt(e.amount);
    }
  });

  $("#total-income").text(income);
  $("#total-expense").text(expense);
  $("#balance").text(income + expense);
}

function Table() {
  $("tbody").text("");
  transactions.forEach(function (element) {
    if (element.type === "income") {
      $("tbody").prepend(
        "<tr class='table-success'> <td>" +
          element.name +
          "</td> <td>" +
          element.amount +
          "</td> <td>" +
          element.date +
          "</td></tr>"
      );
    } else {
      $("tbody").prepend(
        "<tr class='table-danger'> <td>" +
          element.name +
          " </td> <td>" +
          element.amount +
          " </td> <td>" +
          element.date +
          " </td></tr>"
      );
    }
  });
}

$("#table").on("click", "tr", function () {
  var n = $(this).text().split(" ")[1];
  console.log(n);
  transactions = transactions.filter((object) => object.name !== n);
  console.log(transactions);

  Table();
  Balance();
});

Date.prototype.toDateInputValue = function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};
