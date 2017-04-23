"use strict";

function swapToMain() {
  document.getElementById("maintab").style.display="block";
  document.getElementById("techtree").style.display="none";
  document.getElementById("wartab").style.display="none";
}

function swapToTech() {
  document.getElementById("maintab").style.display="none";
  document.getElementById("techtree").style.display="block";
  document.getElementById("wartab").style.display="none";
}

function swapToWar() {
  document.getElementById("maintab").style.display="none";
  document.getElementById("techtree").style.display="none";
  document.getElementById("wartab").style.display="block";
}

function createLogMessage(message) {
  var newLi = document.createElement("li");
  var newText = document.createTextNode(message);
  newLi.appendChild(newText);
  var logList = document.getElementById("gameLog");
  var msgCount = logList.getElementsByTagName("li").length;
  if (msgCount > 100)
    {
      logList.removeChild(logList.lastChild);
      logList.insertBefore(newLi, logList.firstChild);
    }
  else {
    logList.insertBefore(newLi, logList.firstChild);
  }
}

window.onload = function() {
  //Planet
  var currentPlanet;
  watchBranch(store, ["currentPlanet"], function(newPlanet){
    currentPlanet = newPlanet;
    document.getElementById("currentPlanet").textContent=currentPlanet;
  })
  
  //Food
  watchBranch(store, ["planets"], function(planets){
    var food = planets[currentPlanet].food;
    document.getElementById("num_food").textContent=food;
  })
  
  //Planet Image
  watchBranch(store, ["planets"], function(planets){
    var imgsrc = planets[currentPlanet].imgPath;
    document.getElementById("planetImage").src=imgsrc;
  })
  
  //Flavor Text
  watchBranch(store, ["planets"], function(planets){
    var text = planets[currentPlanet].flavorText;
    document.getElementById("flavorText").textContent=text;
  })
}