const arryClass = ["green", "red", "yellow", "blue"];
let counter = 0;
let displayedBox = [];
let recoldBox = [];
for (let i = 0; i < arryClass.length; i++) {
  $("." + arryClass[i]).on("click", function () {
    if (counter > 0) {
      animation($(this));
      let eleClass = $(this).attr("class").split(" ")[0];
      audioBox(arryClass.indexOf(eleClass));
      recoldBox.push(eleClass);
       console.log(recoldBox)
      if (JSON.stringify(displayedBox) === JSON.stringify(recoldBox)) {
        recoldBox = [];
        randGenerator();
        $(".heading").text("Level " + ++counter);
      } else {
        counter = 0;
        $(".heading").text("Game over, Press Any Key to Restart");
        animation($("body"));
        new Audio("sounds/wrong.mp3").play();
      }
    }
  });
}

$(document).on("keydown", function () {
  if (counter === 0) {
    let randpicker = Math.floor(Math.random() * 4);
    animation($("." + arryClass[randpicker]));
    audioBox(randpicker);
    displayedBox.push(arryClass[randpicker]);
    $(".heading").text("Level " + ++counter);
  }
});

function randGenerator() {
  setTimeout(function () {
    var randpicker = Math.floor(Math.random() * 4);
    animation($("." + arryClass[randpicker]));
    audioBox(randpicker);
    displayedBox.push(arryClass[randpicker]);
  }, 1000);
}

function audioBox(index) {
  let audioArry = ["green", "red", "yellow", "blue"];
  new Audio("sounds/" + audioArry[index] + ".mp3").play();
}

function animation(element) {
  element.addClass("spark");
  setTimeout(function () {
    element.removeClass("spark");
  }, 300);
}
