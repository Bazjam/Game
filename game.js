const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;
let gameStart = false;

$(document).keypress(() => {
  if (!started) {
    $("#level-title").text("Level " + level);
    setTimeout(()=>{
      nextSequence();
    },1000)
    
    started = true;
    gameStart = true;
  }
});

$(".btn").click(function() {
  if (gameStart){

  const userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
  }
});

const checkAnswer = (currentLevel) => {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(() => {
          nextSequence();
        }, 1000);
      }

    } else {
      gameStart = false;
      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(() => {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");
      $(document).keypress(() => {
        location.reload();
    });
    }

}

const nextSequence = () => {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

const playSound = (name) => {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

const animatePress = (currentColor) => {
  $("#" + currentColor).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
