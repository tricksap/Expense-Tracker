$(document).ready(function () {
  $("#date").val(new Date().toDateInputValue());
});

Date.prototype.toDateInputValue = function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};

$("#table").on("click", "tr", function (e) {
  // e.preventDefault();
  var id = $(this).attr("value");
  $('[name="delete"]').val(id);
});
