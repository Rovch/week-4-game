$(document).ready(function() {

// card 1
var health1Total = $("#health1Total").text();
var damage1Total = $("#damage1Total").text();
var attack1Total;

$(".attack1").on("click", function () {
  attack1Total = Math.floor((Math.random()) * 45);
  health2Total = health2Total - attack1Total;
  $("#health2Left").text(health2Total);
  console.log(health2Total);
});



// card 2
var health2Total = $("#health2Total").text();
var damage2Total = $("#damage2Total").text();
var attack2Total;























});