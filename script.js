transactions = [];

$(".btn").click(function () {
  let clicked = $(this).attr("name");
  if (clicked == "income") {
    Income();
  } else if (clicked == "expense") {
    Expense();
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
  $("#name").val(" ");
  $("#amount").val(" ");
  $("#date").val(" ");
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
  $("#date").val(" ");
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
    $("tbody").prepend(
      "<tr><td>" +
        element.name +
        "</td> <td>" +
        element.amount +
        "</td> <td>" +
        element.date +
        "</td></tr>"
    );
    if (element.type === "income") {
      $("tbody tr").addClass("table-success");
    } else if (element.type === "expense") {
      $("tbody tr").addClass("table-danger");
    }
  });
}
