transactions = [];

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
  $("#total-income").text(
    parseInt($("#total-income").text()) + parseInt(transaction.amount)
  );
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
  $("#total-expense").text(
    parseInt($("#total-expense").text()) + parseInt(transaction.amount)
  );

  $("#name").val(" ");
  $("#amount").val(" ");
  Balance();
  Table();
}
function Balance() {
  $("#balance").text(
    parseInt($("#total-income").text()) + parseInt($("#total-expense").text())
  );
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
          "</td> <td>" +
          element.amount +
          "</td> <td>" +
          element.date +
          "</td></tr>"
      );
    }
  });
}

Date.prototype.toDateInputValue = function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};
