let name = "";
let amount = 0;
$(".btn").click(function () {
  let clicked = $(this).attr("name");
  if (clicked == "income") {
    Income();
  } else if (clicked == "expense") {
    console.log("expense");
  }
});

function Income() {
  const transaction = {
    name: $("#name").val(),
    amount: $("#amount").val(),
    date: $("#date").val(),
  };
  $("#total-income").text(
    parseInt($("#total-income").text()) + parseInt(transaction.amount)
  );
  $("#name").val(" ");
  $("#amount").val(" ");
  $("#date").val(" ");
}
