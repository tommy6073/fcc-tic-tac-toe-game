$(document).ready(function () {
  let human;
  let ai;

  let c00, c01, c02, c10, c11, c12, c20, c21, c22;

  $("#select-o").click(function () {
    human = "O";
    ai = "X";
    $("#symbol-selection").fadeOut(function () {
      $("#board").fadeTo("slow", 1);
    });
  });
  $("#select-x").click(function () {
    human = "X";
    ai = "O";
    $("#symbol-selection").fadeOut(function() {
      $("#board").fadeTo("slow", 1);
    });
  });

  $("#play-again").click(function () {
    clearBoard();
    $("#result-screen").fadeOut(function () {
      $("#symbol-selection").fadeTo("slow", 1);
    });
  });

  $("td").click(function () {
    if ($(this).text() === "") {
      $(this).text(human);
      updateSquareValues(human);
      checkBoardState(human);
      aiMove();
      updateSquareValues(ai);
      checkBoardState(ai);
    }
  });

  function clearBoard() {
    c00 = $("#c00").text("");
    c01 = $("#c01").text("");
    c02 = $("#c02").text("");
    c10 = $("#c10").text("");
    c11 = $("#c11").text("");
    c12 = $("#c12").text("");
    c20 = $("#c20").text("");
    c21 = $("#c21").text("");
    c22 = $("#c22").text("");
  }

  function updateSquareValues() {
    c00 = $("#c00").html();
    c01 = $("#c01").html();
    c02 = $("#c02").html();
    c10 = $("#c10").html();
    c11 = $("#c11").html();
    c12 = $("#c12").html();
    c20 = $("#c20").html();
    c21 = $("#c21").html();
    c22 = $("#c22").html();
  }

  function checkBoardState(player) {
    if ((c00 === c01 && c00 === c02 && (c00 === player)) || //first row
      (c10 === c11 && c10 === c12 && (c10 === player)) || //second row
      (c20 === c21 && c20 === c22 && (c20 === player)) || //third row
      (c00 === c10 && c00 === c20 && (c00 === player)) || //first column
      (c01 === c11 && c01 === c21 && (c01 === player)) || //second column
      (c02 === c12 && c02 === c22 && (c02 === player)) || //third column
      (c00 === c11 && c00 === c22 && (c00 === player)) || //diagonal 1
      (c02 === c11 && c02 === c20 && (c02 === player))) { //diagonal 2
      if (player === human) {
        $("#board").fadeOut("slow", function () {
          $("#result-message").text("You win!");
          $("#result-screen").fadeTo("slow", 1);
        });
      } else if (player === ai) {
        $("#board").fadeOut("slow", function () {
          $("#result-message").text("You lose...");
          $("#result-screen").fadeTo("slow", 1);
        });
      }
    } else if (c00 && c01 && c02 && c10 && c11 && c12 && c20 && c21 && c22) {
      $("#board").fadeOut("slow", function () {
        $("#result-message").text("It's a tie.");
        $("#result-screen").fadeTo("slow", 1);
      });
    }
  }

  function aiMove() {
    // If there is a chance to win
    if (c00 === "" && ((c01 === ai && c02 === ai) || (c10 === ai && c20 === ai) || (c11 === ai && c22 === ai))) {
      $("#c00").text(ai);
    } else if (c01 === "" && ((c00 === ai && c02 === ai) || (c11 === ai && c21 === ai))) {
      $("#c01").text(ai);
    } else if (c02 === "" && ((c00 === ai && c01 === ai) || (c12 === ai && c22 === ai) || (c11 === ai && c20 === ai))) {
      $("#c02").text(ai);
    } else if (c10 === "" && ((c00 === ai && c20 === ai) || (c11 === ai && c12 === ai))) {
      $("#c10").text(ai);
    } else if (c11 === "" && ((c10 === ai && c12 === ai) || (c00 === ai && c22 === ai) || (c02 === ai && c20 === ai))) {
      $("#c11").text(ai);
    } else if (c12 === "" && ((c10 === ai && c11 === ai) || (c02 === ai && c22 === ai))) {
      $("#c12").text(ai);
    } else if (c20 === "" && ((c21 === ai && c22 === ai) || (c00 === ai && c10 === ai) || (c02 === ai && c11 === ai))) {
      $("#c20").text(ai);
    } else if (c21 === "" && ((c20 === ai && c22 === ai) || (c01 === ai && c11 === ai))) {
      $("#c21").text(ai);
    } else if (c22 === "" && ((c20 === ai && c21 === ai) || (c02 === ai && c12 === ai) || (c00 === ai && c11 === ai))) {
      $("#c22").text(ai);
    }
    // If there is a chance to block
    else if (c00 === "" && ((c01 === human && c02 === human) || (c10 === human && c20 === human) || (c11 === human && c22 === human))) {
      $("#c00").text(ai);
    } else if (c01 === "" && ((c00 === human && c02 === human) || (c11 === human && c21 === human))) {
      $("#c01").text(ai);
    } else if (c02 === "" && ((c00 === human && c01 === human) || (c12 === human && c22 === human) || (c11 === human && c20 === human))) {
      $("#c02").text(ai);
    } else if (c10 === "" && ((c00 === human && c20 === human) || (c11 === human && c12 === human))) {
      $("#c10").text(ai);
    } else if (c11 === "" && ((c10 === human && c12 === human) || (c00 === human && c22 === human) || (c02 === human && c20 === human))) {
      $("#c11").text(ai);
    } else if (c12 === "" && ((c10 === human && c11 === human) || (c02 === human && c22 === human))) {
      $("#c12").text(ai);
    } else if (c20 === "" && ((c21 === human && c22 === human) || (c00 === human && c10 === human) || (c02 === human && c11 === human))) {
      $("#c20").text(ai);
    } else if (c21 === "" && ((c20 === human && c22 === human) || (c01 === human && c11 === human))) {
      $("#c21").text(ai);
    } else if (c22 === "" && ((c20 === human && c21 === human) || (c02 === human && c12 === human) || (c00 === human && c11 === human))) {
      $("#c22").text(ai);
    }    // Center
    else if (c11 === "") {
      $("#c11").text(ai);
    }
    // Opposite corner
    else if (c00 === "" && (c02 === human || c20 === human)) {
      $("#c00").text(ai);
    } else if (c02 === "" && (c00 === human || c22 === human)) {
      $("#c02").text(ai);
    } else if (c22 === "" && (c02 === human || c20 === human)) {
      $("#c22").text(ai);
    } else if (c20 === "" && (c00 === human || c22 === human)) {
      $("#c20").text(ai);
    }
    // Corner
    else if (c00 === "") {
      $("#c00").text(ai);
    } else if (c02 === "") {
      $("#c02").text(ai);
    } else if (c20 === "") {
      $("#c20").text(ai);
    } else if (c22 === "") {
      $("#c22").text(ai);
    }
    // Empty side
    else if (c01 === "") {
      $("#c01").text(ai);
    } else if (c12 === "") {
      $("#c12").text(ai);
    } else if (c21 === "") {
      $("#c21").text(ai);
    } else if (c10 === "") {
      $("#c10").text(ai);
    }
  }
});