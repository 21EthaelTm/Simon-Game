const greenBox = $(".green");
const yellowBox = $(".yellow");
const blueBox = $(".blue");
const redBox = $(".red");
const gamedisplay = [];
const playmemo = [];
const arrybox = [greenBox, yellowBox, blueBox, redBox];
$(document).on("keydown", function (event) {
  let randnum = Math.floor(Math.random() * 4);
  let element = arrybox[randnum];
  element.addClass("spark");
  setTimeout(function () {
    element.removeClass("spark");
  }, 300);
  gamedisplay.push(arrybox[randnum]);
  audiobox(randnum);
});

function audiobox(index) {
  switch (index) {
    case 0:
      new Audio("sounds/green.mp3").play();

      break;
    case 1:
      new Audio("sounds/yellow.mp3").play();

      break;
    case 2:
      new Audio("sounds/blue.mp3").play();

      break;

    case 3:
      new Audio("sounds/red.mp3").play();
      break;

    default:
      return;
  }
}

