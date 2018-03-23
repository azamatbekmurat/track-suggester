// Business (or back-end) logic:

var sum = function(number1, number2, number3, number4) {
  return number1 + number2 + number3 + number4;
};


// User interface (or front-end) logic:

$(document).ready(function() {
	$("form#survey").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var character = $("#character").val();
    var result;

    alert("hi")
    if (character === "add") {
    result = add(number1, number2);
  } else if (character === "subtract") {
    result = subtract(number1, number2);
  } else if (character === "multiply") {
    result = multiply(number1, number2);
  } else if (character === "divide") {
    result = divide(number1, number2);
  } else {
    alert("Error!!");
  }

    $("#language").text(language);
    $("#framework").text(framework);
    $("#result").show();
  });

});
