let userClickedPattern = [];
let gamePattern = [];
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

gamePattern.push(randomChosenColour);

function playAudioG() {
  audio_g.play();
  setTimeout(() => {
    $("#green").addClass("pressed");
  }, 10);
  setTimeout(() => {
    $("#green").removeClass("pressed");
  }, 100);
}

function playAudioR() {
  audio_r.play();
  setTimeout(() => {
    $("#red").addClass("pressed");
  }, 10);
  setTimeout(() => {
    $("#red").removeClass("pressed");
  }, 100);
}

function playAudioY() {
  audio_y.play();
  setTimeout(() => {
    $("#yellow").addClass("pressed");
  }, 10);
  setTimeout(() => {
    $("#yellow").removeClass("pressed");
  }, 100);
}

function playAudioB() {
  audio_b.play();
  setTimeout(() => {
    $("#blue").addClass("pressed");
  }, 10);
  setTimeout(() => {
    $("#blue").removeClass("pressed");
  }, 100);
}

let userChosenColour;
let arr;
let result;

$(".btn").on("click", function() {
  result = $(this).attr("id").split();

})


console.log(result);
console.log(userChosenColour);
// console.log(buttonColours);
// console.log(randomChosenColour);
// console.log(gamePattern);