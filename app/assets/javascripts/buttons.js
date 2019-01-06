$(document).ready(function() {
  var orangeButton = $("#orange-button");
  var greenButton = $("#green-button");
  var redButton = $("#red-button");
  var blueButton = $("#blue-button");

  orangeButton.on("click", function() {
    orangeButton.addClass("orange-button");
    redButton.toggleClass("orange-button");
    blueButton.toggleClass("orange-button");
    greenButton.toggleClass("orange-button");
    redButton.removeClass("green-button blue-button red-button");
    blueButton.removeClass("green-button blue-button red-button");
    greenButton.removeClass("green-button blue-button red-button");
    orangeButton.removeClass("green-button blue-button red-button");
  });

  redButton.on("click", function() {
    redButton.addClass("red-button");
    orangeButton.toggleClass("red-button");
    blueButton.toggleClass("red-button");
    greenButton.toggleClass("red-button");
    redButton.removeClass("green-button blue-button orange-button");
    blueButton.removeClass("green-button blue-button orange-button");
    greenButton.removeClass("green-button blue-button orange-button");
    orangeButton.removeClass("green-button blue-button orange-button");
  });

  blueButton.on("click", function() {
    blueButton.addClass("blue-button");
    redButton.toggleClass("blue-button");
    orangeButton.toggleClass("blue-button");
    greenButton.toggleClass("blue-button");
    redButton.removeClass("green-button orange-button red-button");
    blueButton.removeClass("green-button orange-button red-button");
    greenButton.removeClass("green-button orange-button red-button");
    orangeButton.removeClass("green-button orange-button red-button");
  });

  greenButton.on("click", function() {
    greenButton.addClass("green-button");
    redButton.toggleClass("green-button");
    blueButton.toggleClass("green-button");
    orangeButton.toggleClass("green-button");
    redButton.removeClass("orange-button blue-button red-button");
    blueButton.removeClass("orange-button blue-button red-button");
    greenButton.removeClass("orange-button blue-button red-button");
    orangeButton.removeClass("orange-button blue-button red-button");
  });

});