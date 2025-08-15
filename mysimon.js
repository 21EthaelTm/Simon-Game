const greenBox = $(".green");
const yellowBox = $(".yellow");
const blueBox = $(".blue");
const redBox = $(".red");
 let counter = 0;
const gamedisplay = [];
const playermemo = [];
const arrybox = [greenBox, redBox, yellowBox, blueBox];
$(document).one("keydown", function (event) {
  let randnum = Math.floor(Math.random() * 4);
  let element = arrybox[randnum];
  animation(element);
  audiobox(randnum);
  gamedisplay.push(arrybox[randnum]);
});
for (let i = 0; i < arrybox.length; i++) {
  arrybox[i].on("click", function () {
    let elementclicked = +$(this).text();
      playermemo.push(arrybox[elementclicked]);
    audiobox(elementclicked);
    animation(elementclicked);
  });
}

function audiobox(index) {
  switch (index) {
    case 0:
      new Audio("sounds/green.mp3").play();
      break;
    case 1:
      new Audio("sounds/red.mp3").play();
      break;
    case 2:
      new Audio("sounds/yellow.mp3").play();
      break;
    case 3:
      new Audio("sounds/blue.mp3").play();
      break;

    default:
      return;
  }
}

function animation(element) {
element.addClass("spark");
  setTimeout(function () {
    element.removeClass("spark");
  }, 300);
}
function upDateH() {
    let heading = $('.heading');
    if(counter > 0) {
        heading.test() = 'level ' + counter;
    } else {
        heading.text() = 'Game over, Press Any Key to Restart';
    }
}