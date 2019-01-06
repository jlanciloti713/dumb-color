$(document).ready(function() {
  var orangeButton = $("#orange-button");
  var greenButton = $("#green-button");
  var redButton = $("#red-button");
  var blueButton = $("#blue-button");

  orangeButton.on("click", function() {
    redButton.toggleClass("orange-button red-button");
    blueButton.toggleClass("orange-button blue-button");
    greenButton.toggleClass("orange-button green-button");
  });

  redButton.on("click", function() {
    orangeButton.toggleClass("red-button orange-button");
    blueButton.toggleClass("red-button blue-button");
    greenButton.toggleClass("red-button green-button");
  });

  blueButton.on("click", function() {
    orangeButton.toggleClass("blue-button orange-button");
    redButton.toggleClass("blue-button red-button");
    greenButton.toggleClass("blue-button green-button");
  });

  greenButton.on("click", function() {
    orangeButton.toggleClass("green-button orange-button");
    redButton.toggleClass("green-button red-button");
    blueButton.toggleClass("green-button blue-button");
  });

});