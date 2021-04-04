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
  $();
}
