// Business (or back-end) logic:

var sum = function(number1, number2) {
  return number1 + number2;
};

    var language1 = "Java";
    var language2 = "C#";
    var language3 = "Python";
    var language4 = "Ruby";

    var framework1 = "React";
    var framework2 = "Angular";
    var framework3 = ".NET";

// User interface (or front-end) logic:

$(document).ready(function() {
	$("form#survey").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var person = $("#person").val().toUpperCase();

    var color = $("input:radio[name=color]:checked").val();;
    var result = sum(number1,number2);

    if (result < 4) {
      $("#framework").text(framework1);
    } else if (result >= 4 && result < 7) {
      $("#framework").text(framework2);
    } else {
      $("#framework").text(framework3);
    }

    if (color === "blue") {
    $("#language").text(language1);
  } else if (color === "green") {
    $("#language").text(language2);
  } else if (color === "red") {
    $("#language").text(language3);
  } else if (color === "yellow") {
    $("#language").text(language4);
  }

    $("#name").text(person)
    $("#result").show();
  });

  $("#epicodus").click(function() {
    $("#additional-info").show();
  });

  $("#list").click(function() {
    $(".program-list").fadeToggle();
  });

});
