let userClickedPattern = [];
let gamePattern = [];
let userChosenColour = [];

const buttonColours = ["red", "blue", "green", "yellow"];

const audio_g = new Audio("./sounds/green.mp3");
const audio_r = new Audio("./sounds/red.mp3");
const audio_y = new Audio("./sounds/yellow.mp3");
const audio_b = new Audio("./sounds/blue.mp3");

let level = 0;

const nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  
  $("#level").text(level);
  console.log(level);
  return randomNumber;
};

const randomChosenColour = buttonColours[nextSequence()];

function flashBtn(id) {
  $("#" + id).addClass("pressed");
  setTimeout(() => {
    $("#" + id).removeClass("pressed");
  }, 100);
}

$(document).on("keypress", function (e) {
  if (e.which == 13) {
    $("#level-game").removeClass("hide");
    $("#level-title").addClass("hide");
  }
  setTimeout(() => {
    randomFlashBtn(randomChosenColour);
  }, 500);
});



const randomFlashBtn = (id) => {
  $(`[id=${id}]`).each(function () {
    flashBtn(id);
  });
};

$(".btn").on("click", function () {
  let result = $(this).attr("id");
  userChosenColour.push(result);
  if (result === "green") {
    audio_g.play();
    flashBtn(result);
  }
  if (result === "red") {
    audio_r.play();
    flashBtn(result);
  }
  if (result === "yellow") {
    audio_y.play();
    flashBtn(result);
  }
  if (result === "blue") {
    audio_b.play();
    flashBtn(result);
  }
  level++ ;
  nextSequence();
});

gamePattern.push(randomChosenColour);
