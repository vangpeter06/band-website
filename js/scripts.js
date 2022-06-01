$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeIn();
    $("#initially-hidden").fadeOut();
  });

$("button#black").click(function() {
  $("body").removeClass();
  $("body").addClass("black-background");
});

$("button#white").click(function() {
  $("body").removeClass();
  $("body").addClass("white-background");
});
  
  $("p").click(function() {
    $(".para-blue").toggle();
    $(".para-yellow").toggle();
  });
});