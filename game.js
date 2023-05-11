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
}
// Enter
$(document).on("keypress", function (e) {
  if (e.which == 13) {
    $("#level-game").removeClass("hide");
    $("#level-title").addClass("hide");
  }
  
  randomChosenColour(); // create new id and add to []
  
  setTimeout(() => {
    randomFlashBtn(gameRandomColor[gameRandomColor.length - 1]);  // last element on []
  }, 500);
  
  // console.log(gameRandomColor);
});

// Click
$(".btn").on("click", function () {
  randomChosenColour(); // create new id and add to []

  audioAndFlashBtn($(this).attr("id"));
  
  // const compare = () => {
  //   let click = 0;
  //   console.log(userChosenColor.length);
  //   console.log(gameRandomColor.length);

  //   for (let i = 0; i < cars.length; i++) {
  //   while (gameRandomColor.length < userChosenColor.length) {
  //     if (
  //       JSON.stringify(userChosenColor[click]) !==
  //       JSON.stringify(gameRandomColor[click])
  //     ) {
  //       click++;
  //       console.log(`100%` + click);
  //     }
  //   }
  // };

  // compare()

  setTimeout(() => {
    randomFlashBtn(gameRandomColor[gameRandomColor.length - 1]);  // Next Random id Flash
  }, 1000);

});

