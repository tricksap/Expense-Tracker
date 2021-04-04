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
  };
  transactions.push(transaction);
  $("#total-income").text(
    parseInt($("#total-income").text()) + parseInt(transaction.amount)
  );
  $("#name").val(" ");
  $("#amount").val(" ");
  $("#date").val(" ");
}

function Expense() {
  const transaction = {
    name: $("#name").val(),
    amount: "-" + $("#amount").val(),
    date: $("#date").val(),
  };
  transactions.push(transaction);
  $("#total-expense").text(
    parseInt($("#total-expense").text()) + parseInt(transaction.amount)
  );

  $("#name").val(" ");
  $("#amount").val(" ");
  $("#date").val(" ");
}
