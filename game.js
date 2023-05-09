let userClickedPattern = [];
let gamePattern = [];
let userChosenColour = [];

const buttonColours = ["red", "blue", "green", "yellow"];


const audio_g = new Audio("./sounds/green.mp3");
const audio_r = new Audio("./sounds/red.mp3");
const audio_y = new Audio("./sounds/yellow.mp3");
const audio_b = new Audio("./sounds/blue.mp3");

const nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
};


const randomChosenColour = buttonColours[nextSequence()];

function flashBtn(id) {
  $("#" + id).addClass("pressed");
  setTimeout(() => {
    $("#" + id).removeClass("pressed");
  }, 100);
}

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
  
  nextSequence();
});

randomFlashBtn(randomChosenColour);
gamePattern.push(randomChosenColour);


