$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeIn();
    $("#initially-hidden").fadeOut();
  });
});