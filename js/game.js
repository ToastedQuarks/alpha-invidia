"use strict";

// These are super hacky. No ragrats.
function swapToMain() {
  document.getElementById("maintab").style.display = "block";
  document.getElementById("peopletab").style.display = "none";
  document.getElementById("techtree").style.display = "none";
  document.getElementById("wartab").style.display = "none";
}

function swapToPeople() {
  document.getElementById("maintab").style.display = "none";
  document.getElementById("peopletab").style.display = "block";
  document.getElementById("techtree").style.display = "none";
  document.getElementById("wartab").style.display = "none";
}

function swapToTech() {
  document.getElementById("maintab").style.display = "none";
  document.getElementById("peopletab").style.display = "none";
  document.getElementById("techtree").style.display = "block";
  document.getElementById("wartab").style.display = "none";
}

function swapToWar() {
  document.getElementById("maintab").style.display = "none";
  document.getElementById("peopletab").style.display = "none";
  document.getElementById("techtree").style.display = "none";
  document.getElementById("wartab").style.display = "block";
}

/* Makes a little text li element and throws it on the DOM. If there's more
than 100 already, whack the oldest one */
function createLogMessage(message) {
  var newLi = document.createElement("li");
  // Read the state directly because there's no reason to watch for changes.
  var timestamp = store.getState().time;
  var newText = document.createTextNode("Day " + timestamp + ": " + message);
  newLi.appendChild(newText);
  var logList = document.getElementById("gameLog");
  var msgCount = logList.getElementsByTagName("li").length;
  if (msgCount > 100) {
    logList.removeChild(logList.lastChild);
    logList.insertBefore(newLi, logList.firstChild);
  } else {
    logList.insertBefore(newLi, logList.firstChild);
  }
}

// On page load, make all our little watchers that will update the DOM.
window.onload = function () {
  createLogMessage("We love our planet, but maybe there's more out there?");
  
  //Planet
  var currentPlanet;
  watchBranch(store, ["currentPlanet"], function (newPlanet) {
    currentPlanet = newPlanet;
    document.getElementById("currentPlanet").textContent = currentPlanet;
  });
  
  //Planet Image
  watchBranch(store, ["planets"], function (planets) {
    var imgsrc = planets[currentPlanet].imgPath;
    document.getElementById("planetImage").src = imgsrc;
  });
  
  //Flavor Text
  watchBranch(store, ["planets"], function (planets) {
    var text = planets[currentPlanet].flavorText;
    document.getElementById("flavorText").textContent = text;
  });
  
  //Population
  var population;
  watchBranch(store, ["planets"], function (planets) {
    population = planets[currentPlanet].population;
    document.getElementById("num_population").textContent = population.length;
  });
  
  //Food
  watchBranch(store, ["planets"], function (planets) {
    var food = planets[currentPlanet].food;
    document.getElementById("num_food").textContent = food;
  });
  
  //People
  watchBranch(store, ["people"], function (people) {
    var container = document.getElementById("peopleContainer");
    var newDiv, nameText, birthdate, key;
    for (key of Object.keys(people)) {
      newDiv = document.createElement("div");
      newDiv.className = "person";
      nameText = document.createElement("h3");
      nameText.textContent = people[key].name;
      birthdate = document.createTextNode("Born: " + people[key].born);
      newDiv.appendChild(nameText);
      newDiv.appendChild(birthdate);
      container.appendChild(newDiv);
    }
  });
};