// Universal Functions//

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

// Intro Story //

let theImage = 1;

image1 = new Image();
image1.src = "intro-story/incoming-message.gif";

image2 = new Image();
image2.src = "intro-story/incoming-02.jpg";

function nextImage() {
  if (theImage == 1 ) {
    document.warning.src = image2.src;
    theImage = 2;
  }
}

// Corridor 01 // 

function firstCorridorI(){
  document.getElementById("target").innerHTML = "You find an ID card in a terminal.";
}

function firstCorridorII(){
  document.getElementById("target2").innerHTML = "Seems to just be a security camera...";
}

function firstCorridorIII(){
  document.getElementById("target3").innerHTML = "You realize it's a turret. Yikes!";
}

// Corridor 02 // 

function secondCorridorI(){
  document.getElementById("target").innerHTML = "That didn't seem to quite work...";
}

function secondCorridorII(){
  document.getElementById("target2").innerHTML = "Perhaps this can be used to climb!";
}

function secondCorridorIII(){
  document.getElementById("target3").innerHTML = "You climb up the wall safely...";
}

// Corridor 03 // 

function thirdCorridorI(){
  document.getElementById("target").innerHTML = "You try to not make any noise...";
}

function thirdCorridorII(){
  document.getElementById("target2").innerHTML = "You hear some noises...";
}

function thirdCorridorIII(){
  document.getElementById("target3").innerHTML = "You quickly exit the corridors.";
}

// Summit 01 // 

function firstSummitI(){
  document.getElementById("target").innerHTML = "It's deafening almost...";
}

function firstSummitII(){
  document.getElementById("target2").innerHTML = "You spot an exit in the distance.";
}

function firstSummitIII(){
  document.getElementById("target3").innerHTML = "Right?";
}

// Summit 02 // 

function secondSummitI(){
  document.getElementById("target").innerHTML = "There seems to be a panel next to the entrance...";
}

function secondSummitII(){
  document.getElementById("target2").innerHTML = "You learn about a gravity lift system!";
}

function secondSummitIII(){
  document.getElementById("target3").innerHTML = "One blind leap later and...pronto! You made it!";
}

function coreClick() {
document.getElementById("rhoxenaCore").src = "intro-story/rhoxena-03-dark.png";
}


// Ship Return // 

function clicking(){
let verbs = [];

  verbs[0] = "jumped";
  verbs[1] = "ran";
  verbs[2] = "swam";
  verbs[3] = "hopped";
  verbs[4] = "pushed";
let ranNum = Math.floor(Math.random()*verbs.length);
document.getElementById("replace").innerHTML = verbs[ranNum]
}

// Summit 03 //

let ranNum = 1200;

function mouseClick() {
document.getElementById("arrow").src = "level-room/summit/summit-room-03-arrow-02.png";
}

function animateRotate() {
  ranNum += Math.ceil(Math.random() * 1200);
  let animateWheel = document.querySelector('#spin');
    
  animateWheel.style.setProperty("transform", "rotate(" + ranNum + "deg)");
    let result = 360 - ranNum%360;
    console.log('result ' + result);
    let iching = map_range(result);
    console.log(iching);
}

    
function map_range(degree) {
    return Math.ceil(0 + (64 - 0) * (degree - 0) / (360 - 0));
}

let links = [];
links[0] = "game-lose.html";
links[1] = "game-win.html";
function openLink() {
  var i = ~~(Math.random() * links.length);
  window.location.href = links[i];
  return false;
}

function caveClick() {
document.getElementById("arrowCave").src = "level-room/lowerlvls/lowerlvl-room-05-arrow-01.png";
}



