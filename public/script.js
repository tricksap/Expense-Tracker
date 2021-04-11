$(document).ready(function () {
  $("#date").val(new Date().toDateInputValue());
});

Date.prototype.toDateInputValue = function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};

$("#table").on("click", "tr", function (e) {
  let clicked = $(this).text().replace(/\s+/g, " ").split(" ");
  var id = $(this).attr("value");
  let name = clicked[1];
  let amount = clicked[2];
  let date = clicked[3];

  $('[name="id"]').val(id);
  $('[name="changeName"]').val(name);
  $('[name="changeAmount"]').val(amount);
  $('[name="changeDate"]').val(date);
});
