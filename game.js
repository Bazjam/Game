let gameRandomColor = [];
let userChosenColor = [];

const buttonColors = ["red", "blue", "green", "yellow"];

const audio_g = new Audio("./sounds/green.mp3");
const audio_r = new Audio("./sounds/red.mp3");
const audio_y = new Audio("./sounds/yellow.mp3");
const audio_b = new Audio("./sounds/blue.mp3");

let level = 0;

const nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * 4);

  $("#level").text(level);
  level++;
  return randomNumber;
};

const randomChosenColour = () => {
  gameRandomColor.push(buttonColors[nextSequence()]); // create new id and add to []
};

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

const audioAndFlashBtn = (id) => {
  let result = id;
  userChosenColor.push(result);

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
};
// Enter
$(document).on("keypress", function (e) {
  if (gameRandomColor.length === 0 && e.which == 13) {
    $("#level-game").removeClass("hide");
    $("#level-title").addClass("hide");
    randomChosenColour(); // create new id and add to []
    setTimeout(() => {
      randomFlashBtn(gameRandomColor[gameRandomColor.length - 1]); // last element on []
    }, 500);
  }
});

const gameRules = () => {
  const gameRandomColorLength = gameRandomColor.length - 2;
  const userChosenColorLength = userChosenColor.length - 1;
  let a = '4'

  if (JSON.stringify(userChosenColor[userChosenColorLength]) === JSON.stringify(gameRandomColor[gameRandomColorLength])) {
    setTimeout(() => {
      randomFlashBtn(gameRandomColor[gameRandomColor.length - 1]); // Next Random id Flash
    }, 1000);

    console.log(`TRUE`);

      } else if (a = `4`) {
      console.log(`ZZZZZZZZZ`);
      a = 5;
    
  
  } else if(a = `4`){
    console.log(`False 4`);
  }
};

// Click
$(".btn").on("click", function () {
  randomChosenColour(); // create new id and add to []

  audioAndFlashBtn($(this).attr("id"));

  gameRules();
});
